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

export const calculate = (notation: string) => {
  if (notation.trim() === '') {
    throw new SyntaxError('Empty expression');
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
        throw new EvalError('Invalid Expression');
      }

      stack.push(operators[digit](+a, +b));
    } else {
      throw new SyntaxError(`Unknown operator: ${digit}`);
    }
  }

  if (stack.length !== 1) {
    throw new EvalError('Invalid Expression');
  }

  return stack.pop();
};
