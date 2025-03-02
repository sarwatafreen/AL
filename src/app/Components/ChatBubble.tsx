"use client"; // Agar App Router use kar rahe hain

import { Bot } from "lucide-react"; // AI bot icon
import { useEffect, useState } from "react";

const messages = [
  "I can help optimize your workflows.",
  "Need automation? I'm here!",
  "Let’s streamline your processes.",
  "AI-powered solutions for your business.",
];

const ChatBubble = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      {/* Purple AI Icon */}
      <span className="bg-purple-600 text-white p-2 rounded-full">
        <Bot size={24} />
      </span>
      
      {/* Chat Message */}
      <div className="bg-gray-900 text-white p-3 rounded-xl max-w-xs shadow-md">
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
