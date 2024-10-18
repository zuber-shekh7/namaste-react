import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem";
import Button from "../components/Button";
import { clearItems } from "../slices/cartSlice";

const Cart = () => {
  const { user } = useContext(UserContext);

  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClearButtonClick = () => {
    dispatch(clearItems());
  };

  return (
    <section className="container mx-auto my-8 w-full">
      <section className="mx-auto w-10/12">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-4">
          Cart
        </h1>
        <section className="text-center mt-4">
          <h2 className="text-md font-bold">
            {user ? (
              <span>
                {items?.length === 0 &&
                  `${user.name}, your cart is empty. Please add items.`}
              </span>
            ) : (
              <span>Your cart is empty. Please add items</span>
            )}
          </h2>
        </section>
        <section className="flex justify-end mb-2">
          {items?.length > 0 && (
            <Button
              className="bg-black px-4 hover:bg-slate-700"
              onClick={handleClearButtonClick}
            >
              Clear
            </Button>
          )}
        </section>
        <section className="">
          {items?.length > 0 &&
            items.map((item) => {
              return (
                <MenuItem
                  key={item?.card?.info?.id}
                  from="cart-page"
                  item={item}
                />
              );
            })}
        </section>
      </section>
    </section>
  );
};

export default Cart;
