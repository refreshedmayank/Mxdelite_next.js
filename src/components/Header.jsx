'use client';
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isopen, setisopen] = useState(false)
  const closemenu = () =>{
    setisopen(false)}
  
  return (
    <div>
      <div className="header">
        <button className="w-10 menu-btn" onClick={() => setisopen(!isopen)}>
          {isopen ? "x" : "☰"}
        </button>
        <span className="font-['Montserrat']">Mxdelite</span>
        <div className="w-10"></div>
      </div>
      {isopen && (
        <nav className="menu">
          <div className="menu-bg">
            <div className="mt-20 p-6 flex flex-col gap-10 text-center">
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
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;