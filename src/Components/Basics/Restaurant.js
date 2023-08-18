import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./menuApi";
import Navbar from "./Navbar";

const uniqueCategory = [
  ...new Set(Menu.map((curElem) => curElem.category)),
  "All",
];
// console.log("qwerty", uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  //   const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      return setMenuData(Menu);
    }
    const updatedList = Menu.filter((curElem) => curElem.category === category);
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueCategory} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
