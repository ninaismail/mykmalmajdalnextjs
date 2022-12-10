import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import {useRouter} from 'next/router'

import {FaSearch} from 'react-icons/fa'
import {BiShoppingBag} from 'react-icons/bi'
import { useCart } from "react-use-cart";

import NavItem from "./header-item";
const MENU_LIST = [
  { text: "الصفحة الرئيسية", href: "/" }, 
  { text: "من نحن", href: "http://localhost:3000/#about" },
  { text: "الأهداف", href: "http://localhost:3000/#goals" },
  { text: "إبداعات منتجاتنا", href: "http://localhost:3000/#products" },
  { text: "تواصل معنا", href: "http://localhost:3000/#contact" },
  { text: "حسابي", href: "http://localhost:3000/dashboard" },

];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [style, setStyle] = useState({display: 'none'});
  const [lang, setLang] = useState("AR");
  const [lang1, setLang1] = useState("EN");
  const {totalItems} = useCart();
  const router = useRouter()
  
  const [selectAria, setSelectAria] = useState(false);

    function onChangeHandleInput(e) {
      const title = e.target.value
        router.push({
            pathname: title ? `/search`: `/`,
            state: { clickedFromHome: true  }, 
            query: title ? {title} : '',
          });
  sessionStorage.setItem(title, "this is value stored in sessionStorage")
  } 
  const handleClick= () => {
    setNavActive(!navActive);
    setSelectAria(!selectAria)
  };
  return (
<header>
  <nav>
    <Link href={"/"} className="logo">
      <Image src="/km-logo.png" width="121" height="61" alt="Food Options Logo" />
    </Link>
   <div className={`font-Roboto ${navActive ? "active" : ""} nav__menu-list `}>
   <Link href={'/login'}className="font-Roboto block p-3 hover:text-orange-500
    bg-gray-500 text-white border rounded-full border-black-500 text-center
    focus:ring-black-500 focus:border-black-500 opacity-75">تسجيل الدخول للبيع بالجملة</Link>
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
             placeholder="إبحث..." value={this}
            onChange={onChangeHandleInput} />
        </div>
    </form>
    <Link href={"/my-shopping-cart"} type="button" class="inline-flex relative items-center p-3">
      <BiShoppingBag size="50px"color="orange" className="cursor-pointer"/>
      <div class="inline-flex absolute top-[5px] -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
      {totalItems}
      </div>
    </Link>
    <button type="button" aria-label="Toggle menu" aria-expanded={selectAria}
      className="nav__menu-bar"
      onClick={handleClick}>

      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>  
  </nav>
</header>
  );
};

export default Navbar;