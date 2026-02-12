import api from "../../api/axios";

export const fetchGroups = async () => {
  const res = await api.get("/groups");
  return res.data;
};

export const createGroup = async (name: string) => {
  const res = await api.post("/groups", { name });
  return res.data;
};
