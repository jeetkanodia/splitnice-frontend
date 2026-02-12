import { useNavigate } from "react-router-dom";

type Props = {
  group: any;
};

export default function GroupCard({ group }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/group/${group._id}`)}
      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 active:scale-[0.98] transition"
    >
      <h3 className="font-semibold text-lg">{group.name}</h3>
      <p className="text-sm text-gray-500">
        {group.members.length} members
      </p>
    </div>
  );
}
