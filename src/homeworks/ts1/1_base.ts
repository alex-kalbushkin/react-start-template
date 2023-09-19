export const removePlus = (stringValue: string): string => stringValue.replace(/^\+/, '');

export const addPlus = (stringValue: string): string => `+${stringValue}`;

export const removeFirstZeros = (stringValue: string): string => stringValue.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value?: number, separator = ' '): string | undefined =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

type TransformFromCss = {
  x: number;
  y: number;
};

export const getTransformFromCss = (transformCssString: string): TransformFromCss => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

// or we can use number[](Array<number>) as more common type
type ArrayOfThreeNum = [number, number, number];

export const getColorContrastValue = ([red, green, blue]: ArrayOfThreeNum): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

type ContrastType = 'black' | 'white';

export const getContrastType = (contrastValue: number): ContrastType => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): ArrayOfThreeNum => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

type GetNumberedArrayReturn = {
  value: number;
  index: number;
};

export const getNumberedArray = (arr: number[]): GetNumberedArrayReturn[] =>
  arr.map((value, index) => ({ value, index }));
export const toStringArray = (arr: GetNumberedArrayReturn[]): string[] =>
  arr.map(({ value, index }) => `${value}_${index}`);

export interface ICustomer {
  name: string;
  id: number;
  age: number;
  isSubscribed: boolean;
}

type CustomersTransformed = Record<string, Omit<ICustomer, 'id'>>;

export const transformCustomers = (customers: ICustomer[]) => {
  return customers.reduce((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {} as CustomersTransformed);
};
