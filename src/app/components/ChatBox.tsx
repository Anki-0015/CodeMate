"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { getBotResponse } from "../utils/botLogic"; 

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "👋 Hi! I'm your coding assistant. Ask me anything code-related!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newUserMessage: Message = { role: "user", text: trimmedInput };
    const botReply: string = getBotResponse(trimmedInput);
    const newBotMessage: Message = { role: "assistant", text: botReply };

    setMessages((prev) => [...prev, newUserMessage, newBotMessage]);
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
          type="text"
          className="flex-grow p-2 rounded-xl border border-gray-300 focus:outline-none"
          placeholder="Ask me about code..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700"
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
}
