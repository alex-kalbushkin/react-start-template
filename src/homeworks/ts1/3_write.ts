type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Operation = ICost | IProfit;

enum CostType {
  Cost = 'Cost',
  Profit = 'Profit',
}

interface ICommonOperationData {
  id: string;
  name: string;
  createdAt: string;
  amount: number;
  category: Category;
  desc?: string;
}

interface ICost extends ICommonOperationData {
  type: CostType.Cost;
}

interface IProfit extends ICommonOperationData {
  type: CostType.Profit;
}

export const createRandomProduct = (createdAt: string): Product => {
  const randomNum = Math.floor(Math.random() * 100);
  const productId = `${createdAt}_${randomNum}`;
  const productName = `Product_${productId}`;

  return {
    id: productId,
    name: productName,
    photo: 'https://picsum.photos/id/1/200/300',
    desc: 'test product',
    createdAt,
    oldPrice: randomNum + 10,
    price: randomNum * 2 + 5,
    category: {
      id: `category_for_${productId}_${randomNum + 1}`,
      name: `Category_for_${productName}`,
      photo: 'https://picsum.photos/id/7/4728/3168.jpg',
    },
  };
};

export const createRandomOperation = (createdAt: string): Operation => {
  const randomNum = Math.random() * 10;
  const operationId = `${createdAt}_${randomNum}`;
  const operationName = `Operation_${operationId}`;

  const commonOperationData: ICommonOperationData = {
    id: operationId,
    name: operationName,
    createdAt,
    amount: randomNum * 3,
    category: {
      id: `category_for_${operationId}_${randomNum + 1}`,
      name: `Category_for_${operationName}`,
      photo: 'https://picsum.photos/id/20/3670/2462.jpg',
    },
    desc: 'test operation',
  };

  return randomNum < 5
    ? {
        ...commonOperationData,
        type: CostType.Cost,
      }
    : {
        ...commonOperationData,
        type: CostType.Profit,
      };
};
