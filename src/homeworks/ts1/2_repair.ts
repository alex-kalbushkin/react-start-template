export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

export class SomeClass {
  private set: Set<number>;
  private channel: BroadcastChannel;

  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Data = {
  type: DataTypeOption;
  value: DataValue;
};

export enum DataTypeOption {
  Money = 'Money',
  Percent = 'Percent',
}

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

const isMoney = (value: DataValue): value is Money => {
  return 'currency' in value;
};

const isPercent = (value: DataValue): value is Percent => {
  return 'percent' in value;
};

const throwInvalidDataError = (data: Data): never => {
  throw new Error(`Invalid data: ${JSON.stringify(data)}`);
};

export const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case DataTypeOption.Money:
      if (isMoney(data.value)) {
        return data.value.amount;
      } else {
        throwInvalidDataError(data);
      }
      break;

    case DataTypeOption.Percent:
      if (isPercent(data.value)) {
        return data.value.percent;
      } else {
        throwInvalidDataError(data);
      }
      break;

    default: {
      const unhandledType: never = data.type;
      throw new Error(`unknown type: ${unhandledType}`);
    }
  }
};
