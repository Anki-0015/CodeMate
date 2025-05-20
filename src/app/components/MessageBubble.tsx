interface MessageBubbleProps {
  role: "user" | "assistant";
  text: string;
}

export default function MessageBubble({ role, text }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`w-fit max-w-[80%] px-4 py-2 rounded-xl shadow-sm ${
        isUser
          ? "bg-blue-200 self-end"
          : "bg-gray-200 self-start"
      } text-black`} 
    >
      {text}
    </div>
  );
}
