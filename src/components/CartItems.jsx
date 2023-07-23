import ItemAmountControl from "./ItemAmountControl";
import { formatPrice } from "../helpers/utils";
import DeleteBtn from "./DeleteBtn";
const CartItems = ({ item }) => {
  return (
    <li className="my-5">
      <div className="w-full flex flex-wrap justify-between">
        <div className="flex items-center">
          <p>{item.quantity}</p>
          <p><span>×</span> {item.name}</p>
        </div>
        <div className="flex items-center justify-between w-full sm:justify-normal sm:w-auto">
          <p className="mr-5 font-bold text-xs">
            {formatPrice(item.totalPrice)}
          </p>
          <ItemAmountControl id={item.pizzaId} />
        </div>
      </div>
    </li>
  );
};

export default CartItems;
