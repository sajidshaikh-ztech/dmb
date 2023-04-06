import React from "react";
import './ListingProduct.css';

function ListingProduct(props) {
  return (
      <div class="linelisting-item">
        <h4 class="linelisting-name">{props.product.menuItemName}</h4>
        <p class="linelisting-price">{props.product.menuItemPrice}</p>
        <p class="linelisting-nutrition">{props.product.menuItemNutrition}</p>
      </div>
  );
}

export default ListingProduct;