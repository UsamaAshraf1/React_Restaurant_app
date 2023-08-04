import Menu from "./MenuApi";
import { useState } from "react";
import Menucard from "./Menucard";
import Navbar from "./Navbar.js";


const uniquecatagory=[...new Set(Menu.map((elem)=>{
    return elem.category
 })),
 "All",

];
const Restaurant=()=>{
   const[menuData, setMenuData]=useState(Menu)
   const[categoryList,setCatagoryList]=useState(uniquecatagory)


   const fliteritem =(category)=>{
    if(category==="All"){
        setMenuData(Menu)
        return;
    }
    const updated=Menu.filter((elem)=>{
     return elem.category===category;
    })
    setMenuData(updated);
   }
    return<>
    <Navbar fliteritem={fliteritem} categoryList={categoryList}/>
    
    <Menucard menuData={menuData}/>
    </>
}
export default Restaurant;