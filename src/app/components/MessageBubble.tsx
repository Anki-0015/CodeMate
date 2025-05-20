interface MessageBubbleProps {
  role: "user" | "assistant";
  text: string;
}

export default function MessageBubble({ role, text }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`w-fit max-w-[80%] px-4 py-2 rounded-xl shadow-sm text-black ${
          isUser ? "bg-blue-200" : "bg-gray-200"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
