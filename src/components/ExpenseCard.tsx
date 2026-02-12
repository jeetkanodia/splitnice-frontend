import { formatCurrency } from "../utils/format";

export default function ExpenseCard({ expense }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{expense.description}</p>
          <p className="text-xs text-gray-500">
            Paid by {expense.paidBy?.name}
          </p>
        </div>
        <p className="font-bold">
          {formatCurrency(expense.amount)}
        </p>
      </div>
    </div>
  );
}
