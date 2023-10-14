import React from 'react';
import Chocolate from './assets/images/chocolate.png';
import { AddToCart } from './components/AddToCart';
import { CartProduct } from './components/CartProduct';
import { Layout } from './components/Layout';
import { ModalControl } from './components/ModalControl';
import { OperationFull } from './components/OperationFull';
import { OperationSummary } from './components/OperationSummary';
import { ProductFull } from './components/ProductFull';
import { ProductSummary } from './components/ProductSummary';
import './App.css';

function App() {
  return (
    <div className="App">
      <ModalControl />
      <Layout />
      <OperationFull
        categoryName="Jackets"
        description="Buy two Jackets for 200$"
        title="Buy Jackets"
        transactionAmount={200}
        transactionDate={new Date()}
      />

      <OperationSummary
        transactionAmount={200}
        categoryName="Jackets"
        title="Buy Jacket"
        description="Buy two Jackets for 200$"
      />

      <AddToCart counter={0} />

      <ProductSummary description="Best product ever made" imageUrl={Chocolate} price={100} title="Chocolate" />

      <ProductFull
        categoryName="Food"
        description="Best product ever made"
        imageUrl={Chocolate}
        title="Chocolate"
        price={100}
      />

      <CartProduct />
    </div>
  );
}

export default App;
