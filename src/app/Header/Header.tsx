"use client";
import MenuBar from "../Menu Bar/MenuBar";
import { useState } from "react";
function Header(){
const [isopen, setisOpen] = useState(false);
return(
    <>
   <div className="Header-container  flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full z-50 bg-black text-white">
    <button onClick={()=> setisOpen(!isopen)}>{isopen? "x" : "☰"}</button>
   <span>Mxdelite</span>
   <div className="w-10"></div>
   </div>
   {isopen&& <MenuBar/>}
   </>

);
}
export default Header;