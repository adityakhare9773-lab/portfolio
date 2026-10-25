
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001";

export default function OwnerLogin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/owner/status`, {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not check login status.");
        return response.json();
      })
      .then((data) => setAuthenticated(data.authenticated === true))
      .catch(() => setError("Cannot connect to the login server."))
      .finally(() => setChecking(false));
  }, []);

  async function handleLogin(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/owner/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed.");
      }

      setAuthenticated(true);
      setPassword("");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/owner/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) throw new Error("Logout failed.");

      setAuthenticated(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message || "Could not log out.");
    }
  }

  return (
    <section className="owner-login">
      <h2>Owner Access</h2>
      <p>Sign in to access the portfolio owner area.</p>

      {checking ? (
        <p>Checking login status...</p>
      ) : authenticated ? (
        <div>
          <p>You are logged in as the portfolio owner.</p>
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="owner-email">Email</label>
          <input
            id="owner-email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="owner-password">Password</label>
          <input
            id="owner-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Log in"}
          </button>
        </form>
      )}

      {error && <p role="alert">{error}</p>}
    </section>
  );
}
