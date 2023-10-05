import React from 'react';
import './App.css';
import { ModalWindow } from './components/ModalWindow';
import { Layout } from './components/Layout';
import { OperationFull } from './components/OperationFull';
import { OperationSummary } from './components/OperationSummary';
import { AddToCart } from './components/AddToCart';
import { ProductSummary } from './components/ProductSummary';
import Chocolate from './assets/images/chocolate.png';
import { ProductTotalDescription } from './components/ProductFull';
import { CartProduct } from './components/CartProduct';

function App() {
  return (
    <div className="App">
      {/* <ModalWindow visible>{'Test Data'}</ModalWindow> */}
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

      <ProductTotalDescription
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
