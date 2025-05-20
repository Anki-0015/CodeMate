import ChatBox from "../components/ChatBox";  

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">
          Code Helper ChatBot 💬
        </h1>
        <ChatBox />
      </div>
    </div>
  );
}
