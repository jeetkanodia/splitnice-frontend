
export default function AppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full bg-gray-400 min-h-screen">
        {children}
      </div>
    </div>
  );
}
