import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { createGroup } from "../features/groups/group.api";
import { useQueryClient } from "@tanstack/react-query";

export default function AddGroupModal({
  close
}: {
  close: () => void;
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleCreate = async () => {
    if (!name.trim()) return;

    try {
      setLoading(true);
      await createGroup(name);
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      close();
    } catch {
      alert("Failed to create group");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end">
      <div className="bg-white w-full rounded-t-2xl p-4 space-y-4">
        <h2 className="font-bold text-lg">Create Group</h2>

        <Input
          placeholder="Group name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button onClick={handleCreate} loading={loading}>
          Create
        </Button>

        <button
          onClick={close}
          className="text-center text-gray-500 w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
