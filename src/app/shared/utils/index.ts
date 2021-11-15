export const maskify = (number: string): string => {
  if (number.length < 7) {
    return number;
  }

  const mask = number.slice(1, number.length).replace(/\d(?=\d{4})/g, '*');
  return `${number.slice(0, 1)}${mask}`;
};

const operators = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
};

const isOperator = function (digit: string) {
  return digit in operators;
};

const isValue = function (token: string) {
  return !isNaN(parseFloat(token)) && isFinite(parseInt(token, 10));
};

export const calculate = (notation: string) => {
  if (notation.trim() === '') {
    return null;
  }
  const digits = notation.split(/\s+/);

  const stack: Array<string> = [];
  while (digits.length) {
    const digit = digits.shift() as string;

    if (isValue(digit)) {
      stack.push(digit);
    } else if (isOperator(digit)) {
      const a = stack.pop();
      const b = stack.pop();

      if (a == null || b == null) {
        return null;
      }

      stack.push(operators[digit](+a, +b));
    } else {
      return null;
    }
  }

  if (stack.length !== 1) {
    return null;
  }

  return stack.pop();
};
