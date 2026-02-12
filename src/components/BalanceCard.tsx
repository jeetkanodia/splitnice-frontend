import { formatCurrency } from "../utils/format";

type Props = {
  name: string;
  amount: number;
};

export default function BalanceCard({ name, amount }: Props) {
  const isPositive = amount > 0;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500">{name}</p>
      <p
        className={`font-bold text-lg ${
          isPositive ? "text-green-600" : "text-red-500"
        }`}
      >
        {formatCurrency(amount)}
      </p>
    </div>
  );
}
2