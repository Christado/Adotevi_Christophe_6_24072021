const filterByTag = (photographes, tag) => {
  const result = photographes.filter((photographe) => photographe.tags.includes(tag));
  return result;
};
export default filterByTag;
