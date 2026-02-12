import ExpenseCard from "./ExpenseCard";

export default function ExpenseList({ expenses }: any) {
  if (!expenses?.length) {
    return (
      <div className="text-center text-gray-400 py-8">
        No expenses yet
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {expenses.map((expense: any) => (
        <ExpenseCard key={expense._id} expense={expense} />
      ))}
    </div>
  );
}
