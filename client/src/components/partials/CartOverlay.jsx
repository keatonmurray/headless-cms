import Img from '../partials/Img.jsx';
import product from '/img/product1.jpg';
import { useState } from 'react';

const CartOverlay = () => {

  const proceedToCheckout = () => {
    //logic
  }

  return (
    <div className="cart-overlay position-absolute end-0">
      <div className="card border-0 shadow-lg p-4">
        <p className="bag-count text-start">My Bag: 0</p>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <p className="mb-2 text-start">Cactus</p>
            <div className="d-flex mb-2">
              <button className="qty-btn me-2">+</button>
              <button className="qty-btn">-</button>
            </div>
          </div>
          <Img
            src={product}
            alt="shoe"
            className="product-img"
          />
        </div>

        <div className="mb-3">
          <p className="mb-2 text-start">Size:</p>
          <div className="d-flex">
            <button className="size-btn active">40</button>
            <button className="size-btn">41</button>
            <button className="size-btn">42</button>
            <button className="size-btn">43</button>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>$145.00</span>
          <span>Qty: 1</span>
        </div>

        <div className="d-flex justify-content-between fw-bold mb-3">
          <span>Total</span>
          <span>$145.00</span>
        </div>

        <button onClick={proceedToCheckout} className="btn btn-custom-primary mt-2">Place Order</button>

      </div>
    </div>
  );
};

export default CartOverlay;
