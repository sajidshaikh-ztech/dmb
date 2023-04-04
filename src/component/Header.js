import React from "react";

function Header(props) {
  return (
    <div className='menu-header'>
        <h3>{props.titles.title}</h3>
        <h4>{props.titles.subTitle}</h4>
    </div>
  );
}

export default Header;