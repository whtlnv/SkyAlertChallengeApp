export const maskify = (number: string): string => {
  if (number.length < 7) {
    return number;
  }

  const mask = number.slice(1, number.length).replace(/\d(?=\d{4})/g, '*');
  return `${number.slice(0, 1)}${mask}`;
};
