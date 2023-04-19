import React, { useState, useEffect } from 'react';
import Header from './Header';
import ReturningProduct from './ReturningProduct';
import MainProduct from './MainProduct';
import ProductsDropDown from './ProductsDropDown';
import PriceDropDown from './PriceDropDown';

function QuadPromotion(props) {
    const [data, setData] = useState([]);
    const [menuItem, setMenuItem] = useState([]);
    const [optionValue, setOptionValue] = useState('breakfast');
    const [discount, setDiscount] = useState(0);

    function handleOptionChange(newValue) {
      setOptionValue(newValue);
      console.log('Option Value ' + optionValue);
    }
  
    function applyDiscount(newValue) {
      setDiscount(newValue);
      console.log('Price value ' + discount)
    }

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://ximqh5cncg.execute-api.us-east-1.amazonaws.com/dev/menu?option=' + optionValue);
        const jsonData = await response.json();
        console.log(jsonData);
        setMenuItem(jsonData.menuItems);
        console.log(jsonData.menuItems);
        setData(jsonData);
      };
  
      fetchData();
    }, [optionValue]); 

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://ximqh5cncg.execute-api.us-east-1.amazonaws.com/dev/menu?option=' + optionValue);
        const jsonData = await response.json();
        console.log(jsonData);
        setMenuItem(jsonData.menuItems);
        console.log(jsonData.menuItems);
        setData(jsonData);
      };
  
      fetchData();
    }, []);

  return (
    <div className='body'>
      <div id='panel1' className= 'panel1'>
          <Header titles={data}/>
          <div className='container'>
          {menuItem.map((item, index) => {
              if (item.menuStatus === 'OutOfStock') {
                return <ReturningProduct product={item}/>;
              } else {
                return <MainProduct product={item} discount={discount}/>;
              }
            })}
          </div>
          <div className='container'>
            <ProductsDropDown option={optionValue} onChange={handleOptionChange} />
            <PriceDropDown discount={discount} onChange={applyDiscount} />
          </div>
      </div>
    </div>
  );
}

export default QuadPromotion;