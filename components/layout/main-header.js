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
  const [style, setStyle] = useState({display: 'none'});
  const [lang, setLang] = useState("AR");
  const [lang1, setLang1] = useState("EN");
  return (
<header>
  <div class="fixed right-40 top-0">
    <button class="block bg-black text-white hover:bg-gray-700 font-bold py-2 px-4"
    onMouseEnter={e => {
        setStyle({display: 'block'})
        setLang("EN");
        setLang1("AR")
    }}
    onMouseLeave={e => {
        setStyle({display: 'none'})
        setLang("AR");
        setLang1("EN")
    }}>
      {lang}
    </button>
     <button style={style} class="block bg-black text-white hover:bg-gray-700 font-bold py-2 px-4">
      {lang1}
    </button>
  </div>
  <nav>
    <Link href={"/"} className="logo">
      <Image src="/km-logo.png" width="121" height="61" alt="Food Options Logo" />
    </Link>
   <div className={`font-Roboto ${navActive ? "active" : ""} nav__menu-list `}>
   <button className="font-Roboto block p-3 hover:text-orange-500
    bg-gray-500 text-white border rounded-full border-black-500 
    focus:ring-black-500 focus:border-black-500 opacity-75">تسجيل الدخول للبيع بالجملة</button>
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
                <FaSearch color="white"/>
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