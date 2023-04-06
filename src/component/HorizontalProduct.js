import React from "react";
import './HorizontalProduct.css';
function HorizontalProduct(props) {

  
  return (
    <div className='h-item'>
      <div className='h-item-info'>
        <img className='h-item-image' src={props.product.menuItemImageUrl} alt={props.product.menuItemName} />
      </div>
      <div className='h-item-info'>
        <p className='item-name'>{props.product.menuItemName}</p>
        <p className='item-price'>{props.product.menuItemPrice}</p>
        <p className='item-nutrition'>{props.product.menuItemNutrition}</p>
      </div>
    </div>
  );
}

export default HorizontalProduct;