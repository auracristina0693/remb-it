const getDate = () => {
  const today = new Date();
  const todayString = today.toString();
  return todayString.substring(4, 15);
};

export default getDate;
