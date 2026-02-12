import { formatCurrency } from "../utils/format";

export default function SettlementCard({ settlement }: any) {
  return (
    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-sm">
      <span className="font-semibold">{settlement.from.name}</span>{" "}
      pays{" "}
      <span className="font-semibold">{settlement.to.name}</span>{" "}
      <span className="font-semibold">
        {formatCurrency(settlement.amount)}
      </span>
    </div>
  );
}
