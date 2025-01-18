import React, { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const initialMessages = [
  { id: 1, sender: 'John Doe', content: 'Hey, how are you doing?', timestamp: '10:30 AM' },
  { id: 2, sender: 'You', content: "I'm good, thanks! How about you?", timestamp: '10:32 AM' },
  { id: 3, sender: 'John Doe', content: "I'm doing well. Did you finish the assignment?", timestamp: '10:35 AM' },
];

export default function Message() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center">
          <ArrowLeft className="mr-2" onClick={handleBack} />
          <h1 className="text-2xl font-bold">Messages</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map(message => (
          <div key={message.id} className={`mb-4 ${message.sender === 'You' ? 'text-right' : ''}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
              <p className="font-semibold">{message.sender}</p>
              <p>{message.content}</p>
              <p className="text-xs mt-1 opacity-75">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-4">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

