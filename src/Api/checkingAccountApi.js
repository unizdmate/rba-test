export const fetchCheckingAccountIncomingPayments = async () => {
  const response = await fetch("checkingAccountIncomingPayments.json");
  const parsedData = await response.json();
  return parsedData.data;
};

export const fetchCheckingAccountOutgoingPayments = async () => {
  const response = await fetch("checkingAccountOutgoingPayments.json");
  const parsedData = await response.json();
  return parsedData.data;
};
