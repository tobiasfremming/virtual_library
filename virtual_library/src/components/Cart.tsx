import React from "react";
import Button from "./Button";

interface CartProps {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: CartProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button onClick={onClear} text="Clear" />
    </>
  );
};

export default Cart;
