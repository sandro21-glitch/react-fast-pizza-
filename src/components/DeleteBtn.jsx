import { TbHttpDelete } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";
const DeleteBtn = ({ id }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <button
      onClick={() => handleRemoveItem()}
      className="text-xl font-medium ml-5 hover:text-red-600 transition-colors ease-in duration-100 outline rounded-full flex items-center justify-center hover:outline-red-600 outline-yellow-300 outline-1 p-[.2rem]"
    >
      <TbHttpDelete />
    </button>
  );
};

export default DeleteBtn;
