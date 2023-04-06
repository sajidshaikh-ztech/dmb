import React, { useState, useEffect } from 'react';
import Header from './Header';
import ReturningProduct from './ReturningProduct';
import MainProduct from './MainProduct';

function QuadPromotion(props) {
    const [data, setData] = useState([]);
    const [menuItem, setMenuItem] = useState([]);
    
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://9ea8a0e7-683e-4607-abbd-abaa1abf204a.mock.pstmn.io/menu?test=123');
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
                return <MainProduct product={item}/>;
              }
            })}
          </div>
      </div>
    </div>
  );
}

export default QuadPromotion;