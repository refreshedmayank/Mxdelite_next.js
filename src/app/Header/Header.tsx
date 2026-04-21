"use client";
import MenuBar from "../Menu Bar/MenuBar";
import { useState } from "react";
function Header(){
const [isopen, setisOpen] = useState(false);
return(
   <div className="Header-container header text-white">
    <button onClick={()=> setisOpen(!isopen)}>{isopen? "x" : "☰"}</button>
   <span>Mxdelite</span>
   <div></div>
   {isopen&& <MenuBar/>}
   </div>
);
}
export default Header;