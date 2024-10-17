import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Cart = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center text-orange-600">Cart</h1>
      <section className="text-center mt-4">
        <h2 className="text-md font-bold">
          {user
            ? `
            ${user.name}, Your cart is empty. Please add items.`
            : `Please login to add items to cart`}
        </h2>
      </section>
    </section>
  );
};

export default Cart;
