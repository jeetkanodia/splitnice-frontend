type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  loading = false
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="w-full bg-black text-white py-3 rounded-xl font-semibold active:scale-95 transition disabled:opacity-60"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
