
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import bcrypt from "bcryptjs";
import { rateLimit } from "express-rate-limit";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3001;

const ownerEmail = process.env.OWNER_EMAIL?.trim().toLowerCase();
const ownerPasswordHash = process.env.OWNER_PASSWORD_HASH;
const sessionSecret = process.env.SESSION_SECRET;
const apiKey = process.env.GEMINI_API_KEY;

if (!ownerEmail || !ownerPasswordHash || !sessionSecret) {
  console.error(
    "Missing OWNER_EMAIL, OWNER_PASSWORD_HASH, or SESSION_SECRET in .env"
  );
  process.exit(1);
}

if (!apiKey) {
  console.error("GEMINI_API_KEY is missing from .env");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));

app.use(
  session({
    name: "portfolio_owner_session",
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 2 * 60 * 60 * 1000,
    },
  })
);

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

// Backend homepage
app.get("/", (req, res) => {
  res.send("Portfolio AI backend is running!");
});

// Check whether the owner is logged in
app.get("/api/owner/status", (req, res) => {
  res.json({
    authenticated: req.session?.isOwner === true,
  });
});

// Owner login
app.post("/api/owner/login", loginLimiter, async (req, res) => {
  try {
    const email = String(req.body?.email || "").trim().toLowerCase();
    const password = String(req.body?.password || "");

    const passwordMatches = await bcrypt.compare(
      password,
      ownerPasswordHash
    );

    if (email !== ownerEmail || !passwordMatches) {
      return res.status(401).json({
        error: "Invalid email or password.",
      });
    }

    req.session.regenerate((error) => {
      if (error) {
        return res.status(500).json({
          error: "Could not start your owner session.",
        });
      }

      req.session.isOwner = true;

      req.session.save((saveError) => {
        if (saveError) {
          return res.status(500).json({
            error: "Could not save your login session.",
          });
        }

        res.json({ authenticated: true });
      });
    });
  } catch (error) {
    console.error("Owner login error:", error?.message || error);
    res.status(500).json({
      error: "Login failed. Please try again.",
    });
  }
});

// Owner logout
app.post("/api/owner/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ error: "Logout failed." });
    }

    res.clearCookie("portfolio_owner_session", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.json({ authenticated: false });
  });
});

// Protect future owner-only features
function requireOwner(req, res, next) {
  if (req.session?.isOwner !== true) {
    return res.status(401).json({
      error: "Please log in as the portfolio owner.",
    });
  }

  next();
}

app.get("/api/owner/protected-test", requireOwner, (req, res) => {
  res.json({ message: "Owner access confirmed." });
});

// Gemini AI chatbot
app.post("/api/chat", async (req, res) => {
  const { message } = req.body || {};

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      error: "Please enter a message.",
    });
  }

  const prompt = `
You are the AI assistant on Aditya Kumar Khare's portfolio website.

About Aditya:
- He is a second-year B.Tech AI and Machine Learning student at ABES Engineering College.
- He is learning C++, DSA, web development, AI/ML, and Agentic AI.
- His crop disease detection project is in the research and exploration stage.

Instructions:
- Be friendly, concise, and professional.
- Do not invent achievements, experience, or project results.
- If you do not know something about Aditya, say so honestly.
- Answer general questions helpfully.
- Chat messages do not authorize website modifications.

Visitor's message: ${message.trim()}
`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
      });

      const reply = response.text;

      if (!reply) {
        return res.status(502).json({
          error: "Gemini returned an empty response. Please try again.",
        });
      }

      return res.json({ reply });
    } catch (error) {
      const errorMessage = String(error?.message || error);
      const status = Number(error?.status ?? error?.code);
      const text = errorMessage.toUpperCase();

      const temporary =
        status === 429 ||
        status === 503 ||
        text.includes("503") ||
        text.includes("UNAVAILABLE") ||
        text.includes("429") ||
        text.includes("RESOURCE_EXHAUSTED") ||
        text.includes("TOO MANY REQUESTS");

      console.error(`Gemini attempt ${attempt}/3 failed:`, errorMessage);

      if (!temporary) {
        return res.status(500).json({
          error: "The AI assistant is temporarily unavailable. Please try again.",
        });
      }

      if (attempt === 3) {
        return res.status(503).json({
          error: "Gemini is busy right now. Please try again in a minute.",
        });
      }

      await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    }
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio AI backend running at http://localhost:${PORT}`);
});
