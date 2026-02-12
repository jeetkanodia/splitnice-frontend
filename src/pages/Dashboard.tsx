import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AppLayout from "../layouts/AppLayout";
import { fetchGroups } from "../features/groups/group.api";
import GroupCard from "../components/GroupCard";
import AddGroupModal from "../components/AddGroupModal";
import { useAuthStore } from "../store/auth.store";

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["groups"],
    queryFn: fetchGroups
  });

  const [showModal, setShowModal] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  return (
    <AppLayout>
      <div className="p-4 pb-24">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Your Groups</h1>
          <button
            onClick={logout}
            className="text-sm text-gray-500"
          >
            Logout
          </button>
        </div>

        {isLoading && <p>Loading...</p>}

        <div className="space-y-3">
          {data?.map((group: any) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full text-2xl shadow-lg active:scale-95"
      >
        +
      </button>

      {showModal && (
        <AddGroupModal close={() => setShowModal(false)} />
      )}
    </AppLayout>
  );
}
