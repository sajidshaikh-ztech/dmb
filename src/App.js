import React, { useState, useEffect } from 'react';
import './Menu.css';
import QuadPromotion from './component/QuadPromotion';
import TrioPromotion from './component/TrioPromotion';

function App() {
  const [promoType, setPromoType] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://9ea8a0e7-683e-4607-abbd-abaa1abf204a.mock.pstmn.io/paneldetail');
      const jsonData = await response.json();
      // API to get what kind of promo it is. 
      // API returns the promotion type, quad , one , two , line listing etc. 
      // Will give me promotion details as well
      // Based on promo type include the correct component. 
      console.log(jsonData);
      setPromoType(jsonData.promoType);
    };

    fetchData();
  }, []);

  /*useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 10000); // Refresh data every 10 secs
    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, []);

  const fetchData = () => {
    fetch("https://r63km.wiremockapi.cloud/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenuItem(data.menuItems);
        setData(data)
      });
  };*/

  if (promoType === 'quad') {
    return <QuadPromotion />;
  } else if (promoType === 'trio') {
    return <TrioPromotion />;
  }
}

export default App;

