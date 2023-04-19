import React, { useState } from 'react';

function ProductsDropDown(props) {
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(event) {
    props.onChange(event.target.value);
    //setSelectedOption(event.target.value);
  }

  return (
    <div>
      <label htmlFor="dropdown">Products</label>
      <select id="dropdown" value={props.option} onChange={handleOptionChange}>
        <option value="breakfast">Breakfast</option>
        <option value="deepbrew">Deep Brew</option>
        <option value="lunch">Lunch</option>
      </select>
    </div>
  );
}

export default ProductsDropDown;