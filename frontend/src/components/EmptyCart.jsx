import React from 'react';
import styles from "./EmptyCart.module.css"
import {Link} from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className={styles.main}>
        <img className={styles.img}src="https://i0.wp.com/www.huratips.com/wp-content/uploads/2019/04/empty-cart.png?fit=603%2C288&ssl=1" alt="Empty Cart Image" />
        <h3>Oops!</h3>
        <h3>Looks like there is no item in your cart yet.</h3>
        <br />
        <Link to="/productpage?category=clothing">
        <button className={styles.button}>ADD PRODUCTS</button>
        </Link>       
    </div>
  )
}