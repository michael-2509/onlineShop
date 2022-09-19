import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store/UI-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartSize = useSelector((state) => state.cartReducer.totalAmount);

  const toggleCartHandler = () => {
    dispatch(uiAction.toggleCart());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartSize}</span>
    </button>
  );
};

export default CartButton;
