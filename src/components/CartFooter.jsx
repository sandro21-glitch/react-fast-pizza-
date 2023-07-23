import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalCartQuantity, totalCartPrice } from "../features/cart/cartSlice";
import { formatPrice } from "../helpers/utils";
const CartFooter = () => {
  const { cart } = useSelector((store) => store.cart);
  const total = useSelector(totalCartQuantity);
  const totalPrice = useSelector(totalCartPrice);
  if (cart.length == 0) return null;
  return (
    <div className="sticky w-screen h-[4rem] bg-stone-800 bottom-0 left-0 px-10 flex items-center justify-between">
      <div className="flex items-center gap-[2rem]">
        <p className="text-stone-300 font-semibold uppercase">{total} PIZZAS</p>
        <p className="text-stone-300 font-semibold">
          {formatPrice(totalPrice)}
        </p>
      </div>
      <Link to="/cart" className="text-stone-300 uppercase">
        Open Cart →
      </Link>
    </div>
  );
};

export default CartFooter;
