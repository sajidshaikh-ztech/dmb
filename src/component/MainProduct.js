import React from "react";

function MainProduct(props) {
  
  let itemPrice = parseFloat(parseFloat(props.product.menuItemPrice) - parseFloat(props.discount));
  if (isNaN(itemPrice)) {
    itemPrice = '';
  }

  return (
    <div className='item'>
        <img className='item-image' src={props.product.menuItemImageUrl} alt={props.product.menuItemName} />
        <p className='item-name'>{props.product.menuItemName}</p>
        <p className='item-price'>{itemPrice}</p>
        <p className='item-nutrition'>{props.product.menuItemNutrition}</p>
    </div>
  );
}

export default MainProduct;