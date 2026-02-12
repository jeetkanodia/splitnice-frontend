import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 max-w-md mx-auto">
      <button onClick={() => navigate("/")}>
        🏠
      </button>
      <button>💰</button>
      <button>👤</button>
    </div>
  );
}
