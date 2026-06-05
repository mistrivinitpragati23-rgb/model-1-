import React from "react";
import "./Counter.css";

const Counter = ({ count, setCount, text, setText }) => {
  return (
    <div className="counter-page-container">
      <div className="counter-card glass-panel">
        <div className="counter-card-header">
          <h2>Interactive Counter</h2>
          <p className="counter-card-subtitle">Test and monitor global React state synchronization.</p>
        </div>

        <div className="counter-display-section">
          <div className="counter-glow-ring">
            <span className="counter-digital-value">{count}</span>
            <span className="counter-digital-label">Current Count</span>
          </div>
        </div>

        <div className="counter-controls">
          <button 
            className="counter-btn dec-btn"
            onClick={() => setCount(count - 1)}
            title="Decrement"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Decrement</span>
          </button>

          <button 
            className="counter-btn reset-btn"
            onClick={() => setCount(0)}
            title="Reset"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M16 3h5v5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 21H3v-5"/></svg>
            <span>Reset</span>
          </button>

          <button 
            className="counter-btn inc-btn"
            onClick={() => setCount(count + 1)}
            title="Increment"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Increment</span>
          </button>
        </div>

        <div className="counter-inputs-section">
          <div className="counter-input-group">
            <label className="input-label">Set Counter Manually</label>
            <input 
              type="number" 
              value={count} 
              onChange={(e) => setCount(Number(e.target.value))} 
              className="counter-input-number"
            />
          </div>

          <div className="counter-input-group">
            <label className="input-label">Type message to overview</label>
            <input 
              type="text" 
              placeholder="Enter text..."
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              className="counter-input-text"
            />
          </div>
        </div>

        {text && (
          <div className="counter-preview-badge">
            <span className="badge-title">State Feed:</span>
            <span className="badge-content">"{text}"</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Counter;