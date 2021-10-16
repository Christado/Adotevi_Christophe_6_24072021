/* eslint-disable import/prefer-default-export */
export const filterByTag = (photographes, tag) => {
  const result = photographes.filter((photographe) => photographe.tags.includes(tag));
  return result;
};
