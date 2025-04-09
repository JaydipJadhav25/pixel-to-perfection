import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m ACES Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: 'user', text: input }]);
    
    // Fake bot reply (replace this with backend integration)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { type: 'bot', text: 'Thanks for your query. Our team will get back soon!' }
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 shadow-lg rounded-2xl overflow-hidden bg-white border border-gray-300 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 text-sm font-semibold">
        ACES Chatbot 🤖
      </div>

      {/* Chat Window */}
      <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-72 scrollbar-thin scrollbar-thumb-gray-300">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-sm px-4 py-2 rounded-xl max-w-[80%] ${
              msg.type === 'bot'
                ? 'bg-gray-100 text-gray-800 self-start'
                : 'bg-blue-500 text-white self-end ml-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="flex items-center border-t p-2 bg-gray-50">
        <input
          type="text"
          className="flex-1 px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 text-blue-600 hover:text-blue-800"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
