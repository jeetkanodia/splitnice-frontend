import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import api from "../api/axios";
import BalanceCard from "../components/BalanceCard";
import SettlementCard from "../components/SettlementCard";
import AddExpenseModal from "../components/AddExpenseModal";
import ExpenseList from "../components/ExpenseList";

export default function GroupDetail() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState<"expenses" | "balances">("expenses");

  const { data: expenses } = useQuery({
    queryKey: ["expenses", id],
    queryFn: async () => {
      const res = await api.get(`/expenses/${id}/expenses`);
      return res.data;
    }
  });

  const { data: balances } = useQuery({
    queryKey: ["balances", id],
    queryFn: async () => {
      const res = await api.get(`/expenses/${id}/balances`);
      return res.data;
    }
  });

  const { data: settlements } = useQuery({
    queryKey: ["settlements", id],
    queryFn: async () => {
      const res = await api.get(`/expenses/${id}/settlements`);
      return res.data;
    }
  });

  return (
    <AppLayout>
      <div className="p-4 pb-24 space-y-6">
        <h1 className="text-xl font-bold">Group</h1>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setTab("expenses")}
            className={`flex-1 py-2 rounded-lg text-sm ${
              tab === "expenses"
                ? "bg-white shadow"
                : "text-gray-500"
            }`}
          >
            Expenses
          </button>
          <button
            onClick={() => setTab("balances")}
            className={`flex-1 py-2 rounded-lg text-sm ${
              tab === "balances"
                ? "bg-white shadow"
                : "text-gray-500"
            }`}
          >
            Balances
          </button>
        </div>

        {tab === "expenses" && (
          <ExpenseList expenses={expenses} />
        )}

        {tab === "balances" && (
          <div className="space-y-4">
            {balances?.map((b: any) => (
              <BalanceCard
                key={b._id}
                name={b.name}
                amount={b.amount}
              />
            ))}

            <div className="space-y-2">
              {settlements?.map((s: any, index: number) => (
                <SettlementCard
                  key={index}
                  settlement={s}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full text-2xl shadow-lg active:scale-95"
      >
        +
      </button>

      {showModal && id && (
        <AddExpenseModal
          groupId={id}
          close={() => setShowModal(false)}
        />
      )}
    </AppLayout>
  );
}
