import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import api from "../api/axios";
import { useQueryClient } from "@tanstack/react-query";

export default function AddExpenseModal({
  groupId,
  close
}: {
  groupId: string;
  close: () => void;
}) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleAdd = async () => {
    if (!amount) return;

    try {
      setLoading(true);

      await api.post(`/expenses/${groupId}`, {
        amount: Number(amount),
        description
      });

      queryClient.invalidateQueries({ queryKey: ["balances", groupId] });
      queryClient.invalidateQueries({ queryKey: ["settlements", groupId] });

      close();
    } catch {
      alert("Failed to add expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end">
      <div className="bg-white w-full rounded-t-2xl p-4 space-y-4">
        <h2 className="font-bold text-lg">Add Expense</h2>

        <Input
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button onClick={handleAdd} loading={loading}>
          Add Expense
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
