import axios from '../../lib/axios';
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect} from "react";
import {useRouter} from 'next/router'

import {FaSearch} from 'react-icons/fa'
import {BiShoppingBag} from 'react-icons/bi'
import { useCart } from "react-use-cart";

import NavItem from "./header-item";
const MENU_LIST = [
  { text: "الصفحة الرئيسية", href: "/" }, 
  { text: "من نحن", href: "#about" },
  { text: "الأهداف", href: "#about" },
  { text: "إبداعات منتجاتنا", href: "#product" },
  { text: "تواصل معنا", href: "#contact" },
  { text: "حسابي", href: "/my-account" },

];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [style, setStyle] = useState({display: 'none'});
  const [lang, setLang] = useState("AR");
  const [lang1, setLang1] = useState("EN");
  const {totalItems} = useCart();

  const router = useRouter()

    function onChangeHandleInput(e) {
      const endPoint = e.target.value
        router.push({
            pathname: "/searched",
            state: { clickedFromHome: true },
            query: endPoint
          });
  } 
  return (
<header>
  <nav>
    <Link href={"/"} className="logo">
      <Image src="/km-logo.png" width="121" height="61" alt="Food Options Logo" />
    </Link>
   <div className={`font-Roboto ${navActive ? "active" : ""} nav__menu-list `}>
   <Link href={'/login-or-register'}className="font-Roboto block p-3 hover:text-orange-500
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
            placeholder="إبحث..."
            onChange={onChangeHandleInput} />
        </div>
    </form>
    <Link href={"/my-shopping-cart"} type="button" class="inline-flex relative items-center p-3">
      <BiShoppingBag size="50px"color="orange" className="cursor-pointer"/>
      <div class="inline-flex absolute top-[5px] -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
      {totalItems}
      </div>
    </Link>
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