import React from "react";

interface NavBarProps {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: NavBarProps) => {
  return <div>NavBar: {cartItemsCount}</div>;
};

export default NavBar;
