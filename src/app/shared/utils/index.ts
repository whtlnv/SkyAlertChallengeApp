export const maskify = (number: string): string => {
  if (number.length < 7) {
    return number;
  }

  const mask = number.slice(1, number.length).replace(/\d(?=\d{4})/g, '*');
  return `${number.slice(0, 1)}${mask}`;
};

export const numberToOrdinal = (number: number) => {
  const suffix = ['th', 'st', 'nd', 'rd'];
  const module = number % 100;
  return number + (suffix[(module - 20) % 10] || suffix[module] || suffix[0]);
};
