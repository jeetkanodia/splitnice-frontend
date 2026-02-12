export const formatCurrency = (paise: number) => {
  const rupees = paise / 100;

  return rupees.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });
};
