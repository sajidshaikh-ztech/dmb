import React, { useState, useEffect } from 'react';
import Header from './Header';
import ReturningProduct from './ReturningProduct';
import ListingProduct from './ListingProduct';

function LineListing(props) {
    const [data, setData] = useState([]);
    const [menuItem, setMenuItem] = useState([]);
    
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://ximqh5cncg.execute-api.us-east-1.amazonaws.com/dev/linelisting');
        const jsonData = await response.json();
        setMenuItem(jsonData.menuItems);
        setData(jsonData);
      };
  
      fetchData();
    }, []);

  return (
    <div className='body'>
      <div id='panel1' className= 'panel1'>
          <Header titles={data}/>
          <div>
          {menuItem.map((item, index) => {
              if (item.menuStatus === 'OutOfStock') {
                return <ReturningProduct product={item}/>;
              } else {
                return <ListingProduct product={item}/>;
              }
            })}
          </div>
      </div>
    </div>
  );
}

export default LineListing;