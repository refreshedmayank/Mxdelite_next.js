'use client';
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isopen, setisopen] = useState(false)
  const closemenu = () =>{
    setisopen(false)}
  
  return (
    <div>
      <div className="header fixed top-0 left-0 right-0  bg-black text-white flex justify-between text-md border z-50 h-[40px] items-center">
        <button className="w-10 menu-btn" onClick={() => setisopen(!isopen)}>
          {isopen ? "x" : "☰"}
        </button>
        <span className="font-['Montserrat']">Mxdelite</span>
        <div className="w-10"></div>
      </div>
      {isopen && (
        <nav className="bg-black text-white fixed top-[40px] left-0 right-0 bottom-0 z-40 flex justify-center items-center ">
          
            <div className="flex flex-col gap-6 text-center ">
              <Link href="/" onClick={closemenu}>Home</Link>
              <Link href="/services" onClick={closemenu}>
                Services
              </Link>
              <Link href="/contact" onClick={closemenu}>
                Contacts
              </Link>
              <Link href="/problems" onClick={closemenu}>
                Problems
              </Link>
            </div>
        
        </nav>
      )}
    </div>
  );
}

export default Header;