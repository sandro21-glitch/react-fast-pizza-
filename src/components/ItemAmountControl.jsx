import { useDispatch, useSelector } from "react-redux";
import DeleteBtn from "./DeleteBtn";
import {
  removeItem,
  increaseAmount,
  decreaseAmount,
} from "../features/cart/cartSlice";
import { getCurrentQuantityById } from "../features/cart/cartSlice";
const ItemAmountControl = ({ id }) => {
  const itemAmount = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="flex items-center">
      <div>
        <button
          onClick={() => {
            if (itemAmount <= 1) {
              handleRemoveItem();
            } else {
              dispatch(decreaseAmount(id));
            }
          }}
          className="text-sm w-8 h-8  rounded-full bg-yellow-300 text-black outline outline-yellow-300 focus:outline-offset-4 hover:opacity-70 transition-opacity ease-in duration-150 "
        >
          -
        </button>
        <span className="mx-3 font-normal">{itemAmount}</span>
        <button
          onClick={() => dispatch(increaseAmount(id))}
          className="text-sm w-8 h-8 rounded-full bg-yellow-300 text-black outline outline-yellow-300 focus:outline-offset-4 hover:opacity-70 transition-opacity ease-in duration-150"
        >
          +
        </button>
      </div>
        <DeleteBtn id={id} />
    </div>
  );
};

export default ItemAmountControl;
