import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../helpers/utils";
import { addToCart } from "../features/cart/cartSlice";
import ItemAmountControl from "../components/ItemAmountControl";
import { useEffect, useState } from "react";
import AddToCartBtn from "./AddToCartBtn";

const MenuItem = ({ id, name, unitPrice, imageUrl, ingredients, soldOut }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const newItem = {
    pizzaId: id,
    name,
    price: unitPrice,
    totalPrice: unitPrice,
    quantity: 1,
  };

  const isItemInCart = cart.some((item) => item.pizzaId === id);

  const [addItem, setAddItem] = useState(isItemInCart);

  const handleAddItem = () => {
    dispatch(addToCart(newItem));
    setAddItem(true);
  };

  // update the addItem state
  useEffect(() => {
    setAddItem(isItemInCart);
  }, [cart, isItemInCart]);

  return (
    <li className="py-2 px-2">
      <div className="flex">
        <img
          src={imageUrl}
          alt={name}
          className={`h-[6rem] ${soldOut ? "grayscale" : null}`}
          loading="lazy"
        />
        <div className="ml-5 w-full grid grid-cols-1 items-center">
          <div>
            <h6>{name}</h6>
            <ul className="flex flex-wrap row-gap-5">
              {ingredients.map((ing, index) => {
                return (
                  <li
                    key={index}
                    className="text-sm italic text-gray-500 capitalize"
                  >
                    {ing}
                    {index !== ingredients.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
          </div>
          {soldOut ? (
            <p className="font-semibold uppercase">Sold Out</p>
          ) : (
            <div className="flex justify-between">
              <p>{formatPrice(unitPrice)}</p>
              {addItem ? (
                <ItemAmountControl id={id} />
              ) : (
                <AddToCartBtn handleAddItem={handleAddItem} />
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
