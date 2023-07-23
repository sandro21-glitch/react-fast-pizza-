import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const { userName } = useSelector((store) => store.user);
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (cart.length < 1) {
    return (
      <article className="section px-5 py-2 h-screen overflow-x-hidden">
        <Link
          to={-1}
          className="text-blue-500 text-sm hover:underline mt-5 mb-10 block"
        >
          ← Back to menu
        </Link>
        <p className="font-bold">
          Your cart is still empty. Start adding some pizzas :)
        </p>
      </article>
    );
  }

  return (
    <article className="section px-5 py-2 h-screen overflow-x-hidden">
      <Link
        to={-1}
        className="text-blue-500 text-sm hover:underline mt-5 mb-10 block"
      >
        ← Back to menu
      </Link>
      <div>
        <h3>Your cart, {userName}</h3>
        <ul>
          {cart.map((item) => {
            return <CartItems key={item.pizzaId} item={item} />;
          })}
        </ul>
      </div>
      <hr />
      <div>
        <button className="uppercase mt-5 text-sm font-medium transition-colors ease-in duration-100 bg-lightYellow border-2 border-transparent hover:bg-yellow-400 rounded-2xl px-3 py-2 outline-1 focus:outline outline-yellow-300 focus:outline-offset-2">
          Order Pizzas
        </button>
        <button
          onClick={() => dispatch(clearCart())}
          className="ml-5 uppercase mt-5 text-sm text-stone-400 hover:text-black font-medium transition-colors ease-in duration-100 border-2 hover:bg-[#e5e7eb] border-[#e5e7eb] rounded-2xl px-3 py-2 outline-1 focus:outline outline-stone-400 focus:outline-offset-2"
        >
          Clear Cart
        </button>
      </div>
    </article>
  );
};

export default Cart;
