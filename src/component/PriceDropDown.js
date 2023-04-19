import React from 'react';

function PriceDropDown(props) {

  function handleOptionChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <div className='config-container'>
      <label htmlFor="dropdown">Pricing</label>
      <select id="dropdown" value={props.discount} onChange={handleOptionChange}>
        <option value="0">Group 1 (normal)</option>
        <option value="0.5">Group 2 (everthing 50 cents less)</option>
      </select>
    </div>
  );
}

export default PriceDropDown;