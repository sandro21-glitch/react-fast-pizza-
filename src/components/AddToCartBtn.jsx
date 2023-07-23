const AddToCartBtn = ({ handleAddItem }) => {
  return (
    <button
      onClick={() => handleAddItem()}
      className="bg-lightYellow py-2 px-4 text-[.8rem] rounded-3xl uppercase font-semibold focus:outline outline-yellow-300 focus:outline-offset-4 hover:bg-yellow-300 transition-colors ease-in duration-150"
    >
      add to cart
    </button>
  );
};

export default AddToCartBtn;
