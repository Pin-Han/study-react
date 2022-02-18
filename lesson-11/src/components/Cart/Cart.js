import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (props) => {
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>;
  };
  return (
    <Modal>
      {cartItems}
      <span className={classes.total}>Total Amount</span>
    </Modal>
  );
};
export default Cart;
