import React from "react";

function MainProduct(props) {
  return (
    <div className='item'>
        <img className='item-image' src={props.product.menuItemImageUrl} alt={props.product.menuItemName} />
        <p className='item-name'>{props.product.menuItemName}</p>
        <p className='item-price'>{props.product.menuItemPrice}</p>
        <p className='item-nutrition'>{props.product.menuItemNutrition}</p>
    </div>
  );
}

export default MainProduct;