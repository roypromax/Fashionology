import React, { useState } from 'react'
import style from "./ProductCard.module.css"
import { Link } from 'react-router-dom';

const ProductCard = ({_id,name,price,images}) => {
  const [hover,setHover] = useState(false);

  const mouseEnterFn = ()=>{
    setHover(true);
  }

  const mouseLeaveFn = ()=>{
    setHover(false);
  }

  return (
    <Link to={`/productpage/${_id}`}>
    <div className={style.cardContainer} onMouseEnter={mouseEnterFn} onMouseLeave={mouseLeaveFn}>
      <img className={style.cardImage} src={hover?images[1]:images[0]} alt={name} />
      <div className={style.cardDetails}>
        <h4 className={style.cardName}>{name}</h4>
        <p className={style.cardPrice}>${price}</p>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard;
