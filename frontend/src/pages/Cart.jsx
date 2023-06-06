import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import axios from "axios";
import { EmptyCart } from "../components/EmptyCart";

const url = "https://agile-sweatshirt-worm.cyclic.app";

function Cart() {
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData")) || null;
    axios
      .get(`${url}/cart`, {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      });
  }, []);

  function totalPrice() {
    let total = 0;
    for (let i = 0; i <= cart.length - 1; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  }

  function totalItems() {
    let total = 0;
    for (let i = 0; i <= cart.length - 1; i++) {
      total += cart[i].quantity;
    }
    return total;
  }

  function removeItem(id) {
    let newArr = cart.filter((el, i) => {
      return el._id !== id;
    });
    setCart(newArr);
  }

  function decrement(id, quantity) {
    if (quantity === 1) {
      return;
    }
    let newArr = cart.map((el, i) => {
      if (el._id == id) {
        return { ...el, quantity: el.quantity - 1 };
      } else {
        return el;
      }
    });
    setCart(newArr);
  }

  function increment(id) {
    let newArr = cart.map((el, i) => {
      if (el._id == id) {
        return { ...el, quantity: el.quantity + 1 };
      } else {
        return el;
      }
    });
    setCart(newArr);
  }

  function onCheckout() {
    localStorage.setItem(
      "cartData",
      JSON.stringify({
        cart: cart,
        totalPrice: (totalPrice() - totalPrice() * 0.1).toFixed(2),
      })
    );
    navigate("/checkout");
  }

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <EmptyCart />
        <Footer />
      </>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className={styles.main}>
          <div className={styles.itemcontainerMain}>
            <h1>Total Items ({totalItems()})</h1>
            <div className={styles.itemContainer}>
              {cart?.map((el, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className={styles.cartitemDiv}>
                      <div>
                        <span>{el.name}</span>
                        <span>${el.price}</span>
                      </div>
                      <div>
                        <span>
                          Brand:{" "}
                          {el.brand[0].toUpperCase() +
                            el.brand.substr(1).toLowerCase()}
                        </span>
                        <span>Size:{el.size}</span>
                      </div>
                      <div className={styles.productimageDiv}>
                        <img src={el.images[0]} alt="product image" />
                      </div>
                      <div>
                        <div onClick={() => removeItem(el._id)}>
                          <span>Remove</span>
                        </div>
                        <div>
                          <span onClick={() => decrement(el._id, el.quantity)}>
                            &nbsp;-&nbsp;
                          </span>
                          <span>&nbsp;&nbsp;{el.quantity}&nbsp;&nbsp;</span>
                          <span onClick={() => increment(el._id)}>
                            &nbsp;+&nbsp;
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className={styles.cartsummaryMain}>
            <div className={styles.cartsummary}>
              <div>
                <span>Item Total</span>
                <span>${totalPrice()}</span>
              </div>
              <div>
                <span>Discount</span>
                <span>-10%</span>
              </div>
              <hr />
              <div>
                <span>Shipping Fee</span>
                <span>As per delivery address</span>
              </div>
              <hr />
              <div>
                <span>To be paid</span>
                <span>${(totalPrice() - totalPrice() * 0.1).toFixed(2)}</span>
              </div>
              <div>
                <span>Total Savings</span>
                <span>${(totalPrice() * 0.1).toFixed(2)}</span>
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <button onClick={onCheckout} className={styles.checkoutButton}>
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart;
