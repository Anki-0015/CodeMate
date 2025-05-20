"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble"; // ✅ Adjust path if needed

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hi! I'm here to help you with coding. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage: Message = { role: "user", text: input };
    const newBotMessage: Message = {
      role: "assistant",
      text: `You said: ${input}`, // Replace this with your logic or API call
    };

    setMessages([...messages, newUserMessage, newBotMessage]);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg space-y-4">
      <div className="h-80 overflow-y-auto space-y-4 mb-4 p-2 bg-gray-50 rounded-lg">
        {messages.map((msg, index) => (
          <MessageBubble key={index} role={msg.role} text={msg.text} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          className="flex-grow p-2 rounded-xl border border-gray-300 focus:outline-none"
          type="text"
          placeholder="Ask me about code..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
