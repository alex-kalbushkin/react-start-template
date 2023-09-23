import { DataTypeOption, getDataAmount } from './2_repair';

describe('all', () => {
  it('data-amount', () => {
    const data = {
      type: DataTypeOption.Money,
      value: {
        currency: 'USD',
        amount: 100,
      },
    };

    expect(getDataAmount(data)).toEqual(100);
  });
});
