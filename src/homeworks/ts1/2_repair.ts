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

export enum DataTypeOption {
  Money = 'Money',
  Percent = 'Percent',
}

export type Data = {
  type: DataTypeOption;
  value: DataValue;
};

export type DataValue = Money | Percent;

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

export const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case DataTypeOption.Money:
      return (data.value as Money).amount;

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const unhandled: never = (() => {
        throw new Error(`unknown type: ${data.type}`);
      })();
    }
  }
};
