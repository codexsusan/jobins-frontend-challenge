export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // For millions
  } else if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 2) + "k"; // For thousands
  }
  return num.toString(); // Less than 1000
};
