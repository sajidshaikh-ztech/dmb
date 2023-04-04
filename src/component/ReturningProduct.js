import React from "react";

function ReturningProduct(props) {
  return (
    <div className='out-of-stock-item'>
      <img className='item-image' src={props.product.alternateItem} alt={props.product.menuItemName} />
      <p className='item-name'>{props.product.menuItemName}</p>
      <p className='item-price'>${props.product.menuItemPrice}</p>
      <p className='item-nutrition'>{props.product.menuItemNutrition}</p>
  </div>
  );
}

export default ReturningProduct;