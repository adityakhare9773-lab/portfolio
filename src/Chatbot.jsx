
import { useEffect, useRef, useState } from 'react'
import './Chatbot.css'
import OwnerLogin from './OwnerLogin'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hello! I'm Aditya's AI assistant. Ask me about his skills, education, or projects."
    }
  ])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading, isOpen])

  async function sendMessage(e) {
    e.preventDefault()

    const question = message.trim()
    if (!question || loading) return

    setMessages(prev => [...prev, { role: 'user', text: question }])
    setMessage('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: question })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Request failed')
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: data.reply || data.response || 'No reply received.'
        }
      ])
    } catch (error) {
      console.error('Chatbot error:', error)

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: 'Connection interrupted. Please check that the AI server is running and try again.'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  function askSuggestion(question) {
    setMessage(question)
  }

  function toggleChat() {
    setIsOpen(prev => !prev)
  }

  function toggleSize() {
    setIsExpanded(prev => !prev)
  }

  return (
    <>
      {/* Owner login section */}
      <OwnerLogin />

      {/* Existing AI chatbot */}
      <div className="chatbot-container">
        {isOpen && (
          <section
            className={`chatbot-window ${isExpanded ? 'expanded' : ''}`}
            role="dialog"
            aria-label="Aditya's AI assistant"
          >
            <header className="chatbot-header">
              <div className="ai-avatar">AI</div>

              <div className="chatbot-heading">
                <strong>NEURAL ASSISTANT</strong>
                <p>
                  <span className="online-dot" />
                  SYSTEM ONLINE
                </p>
              </div>

              <div className="chatbot-window-actions">
                <button
                  className="chatbot-size"
                  onClick={toggleSize}
                  aria-label={
                    isExpanded ? 'Make chat smaller' : 'Make chat bigger'
                  }
                  title={isExpanded ? 'Minimize chat' : 'Maximize chat'}
                >
                  {isExpanded ? '❐' : '□'}
                </button>

                <button
                  className="chatbot-close"
                  onClick={() => {
                    setIsOpen(false)
                    setIsExpanded(false)
                  }}
                  aria-label="Close chat"
                  title="Close chat"
                >
                  ×
                </button>
              </div>
            </header>

            <div className="chatbot-status">
              <span>SECURE CONNECTION</span>
              <span>GEMINI AI</span>
            </div>

            <div className="chatbot-messages">
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`chat-message-row ${item.role}`}
                >
                  {item.role === 'assistant' && (
                    <div className="message-avatar">AI</div>
                  )}

                  <div className={`chat-message ${item.role}`}>
                    {item.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && !loading && (
                <div className="chatbot-suggestions">
                  <p>QUICK PROMPTS</p>

                  <button
                    onClick={() =>
                      askSuggestion("Tell me about Aditya's skills.")
                    }
                  >
                    <span>↗</span> Explore his skills
                  </button>

                  <button
                    onClick={() =>
                      askSuggestion("Tell me about Aditya's projects.")
                    }
                  >
                    <span>⌘</span> View his projects
                  </button>

                  <button
                    onClick={() =>
                      askSuggestion("Tell me about Aditya's education.")
                    }
                  >
                    <span>◈</span> Education &amp; background
                  </button>
                </div>
              )}

              {loading && (
                <div className="chat-message-row assistant">
                  <div className="message-avatar">AI</div>

                  <div
                    className="chat-message assistant typing-indicator"
                    aria-label="AI is thinking"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-form" onSubmit={sendMessage}>
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Transmit a message..."
                aria-label="Your message"
                disabled={loading}
              />

              <button
                type="submit"
                aria-label="Send message"
                disabled={loading || !message.trim()}
              >
                ↗
              </button>
            </form>

            <footer className="chatbot-footer">
              POWERED BY GEMINI <span>•</span> BUILT FOR EXPLORATION
            </footer>
          </section>
        )}

        <button
          className={`chatbot-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={toggleChat}
          aria-label={isOpen ? 'Close AI chat' : 'Open AI chat'}
        >
          <span className="toggle-icon">{isOpen ? '×' : '✳'}</span>
          <span>{isOpen ? 'Close interface' : 'Ask AI Assistant'}</span>
          {!isOpen && <span className="toggle-status" />}
        </button>
      </div>
    </>
  )
}
