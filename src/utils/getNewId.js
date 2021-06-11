const getNewId = (notes) => {
  if (notes.length === 0) {
    return 0;
  }
  const ids = notes.map((obj) => obj.id);
  return Math.max(...ids) + 1;
};

export default getNewId;
