import Link from "next/link";
import Image from "next/image";
import React, { useState , useRef} from "react";
import {FaSearch} from 'react-icons/fa'
import {BiShoppingBag} from 'react-icons/bi'

import NavItem from "./header-item";
const MENU_LIST = [
  { text: "الصفحة الرئيسية", href: "/" }, 
  { text: "من نحن", href: "#about" },
  { text: "الأهداف", href: "#about" },
  { text: "إبداعات منتجاتنا", href: "#product" },
  { text: "تواصل معنا", href: "#contact" },
  { text: "حسابي", href: "#account" },

];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
<header>
  <nav>
    <Link href={"/"} className="logo">
      <Image src="/km-logo.png" width="121" height="61" alt="Food Options Logo" />
    </Link>

    <button className="block p-3 hover:text-orange-500
    bg-gray-500 text-white placeholder-black border rounded-full border-black-300 
    focus:ring-black-500 focus:border-black-500 opacity-75">تسجيل الدخول للبيع بالجملة</button>
    <div className={` ${navActive ? "active" : ""} nav__menu-list `}>
      {MENU_LIST.map((menu, idx) => (
        <div 
          onClick={() => {
            setActiveIdx(idx);
            setNavActive(false);
          }}
          key={menu.text}
        >
          <NavItem active={activeIdx === idx} {...menu} />
        </div>
      ))}
    </div>
    <form>   
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
            <div className="flex absolute inset-y-0 right-5 items-center pl-3 pointer-events-none">
                <FaSearch/>
            </div>
            <input type="search" id="default-search" className="block p-3 pr-10 w-full text-sm 
             bg-gray-500 text-black placeholder-black border rounded-full border-black-300 
             focus:ring-black-500 focus:border-black-500 opacity-75" 
            placeholder="إبحث..."
            required=""/>
        </div>
    </form>
    <BiShoppingBag size="50px"color="orange" className="cursor-pointer"/>
    <div className="nav__menu-bar"
      onClick={() => setNavActive(!navActive)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>  
  </nav>
</header>
  );
};

export default Navbar;