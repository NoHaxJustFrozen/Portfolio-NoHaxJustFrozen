import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import './Terminal.css';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'NOHAXUS OS v1.0.4' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Toggle terminal with Ctrl+K or /
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === 'k') || e.key === '/') {
        // Prevent default only if not in an input already, or always to capture
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let response = [];

    switch (cmd) {
      case 'help':
        response = [
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  whoami    - Display user info' },
          { type: 'output', text: '  skills    - List core technologies' },
          { type: 'output', text: '  contact   - Show contact information' },
          { type: 'output', text: '  clear     - Clear terminal history' },
          { type: 'output', text: '  exit      - Close terminal' }
        ];
        break;
      case 'whoami':
        response = [{ type: 'output', text: 'I am NoHaxJustFrozen (mcnrylmz). Software developer based in Istanbul.' }];
        break;
      case 'skills':
        response = [
          { type: 'output', text: 'Frontend: React, JavaScript, Framer Motion, Three.js' },
          { type: 'output', text: 'Backend: C#, .NET Core, Python, Node.js' },
          { type: 'output', text: 'Other: WebGL, GSAP, OBD Telemetry' }
        ];
        break;
      case 'contact':
        response = [{ type: 'output', text: 'Email: mcnrylmz@gmail.com | GitHub: NoHaxJustFrozen | LinkedIn: nohaxus' }];
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        setIsOpen(false);
        setInput('');
        return;
      default:
        response = [{ type: 'error', text: `Command not found: ${cmd}` }];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: `guest@nohaxus:~$ ${input}` },
      ...response
    ]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="terminal-overlay"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-header-left">
                <TerminalIcon size={16} />
                <span>guest@nohaxus-os</span>
              </div>
              <button className="terminal-close" onClick={() => setIsOpen(false)}>
                <X size={16} />
              </button>
            </div>
            <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className={`terminal-line ${line.type}`}>
                  {line.text}
                </div>
              ))}
              <form onSubmit={handleCommand} className="terminal-input-line">
                <span className="terminal-prompt">guest@nohaxus:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
