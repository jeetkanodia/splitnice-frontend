import api from "../../api/axios";

export const fetchExpenses = async (groupId: string) => {
  const res = await api.get(`/expenses/${groupId}/expenses`);
  return res.data;
};