export const shortenString = (val) => {
  if (val.length > 100) {
    return val.substr(0, 100) + "...";
  }
  return val;
};
