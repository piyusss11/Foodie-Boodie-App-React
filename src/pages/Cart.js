import { useDispatch, useSelector } from "react-redux";
import MenuItems from "../components/MenuItems";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
      dispatch(clearCart());
    };
  return (
    <div className="flex mx-20 flex-col">
      <h1 className="mx-auto mt-8 text-2xl dark:text-white">Cart</h1>
      <button
        onClick={handleClearCart}
        className="p-1 mt-2 mx-auto w-24 rounded-md text-base text-white bg-yellow-500"
      >
        ClearCart
      </button>
      <div className="w-1/2 m-auto mt-8 ">
        {cartItems.length === 0 ? (
          <p className="text-center dark:text-white">Your cart is empty</p>
        ) : (
          cartItems.map((item) => <MenuItems key={item.id} menuItem={item} />)
        )}
      </div>
    </div>
  );
};
export default Cart;
