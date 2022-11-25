import axios from '../lib/axios';
import Image from "next/image";

import Head from 'next/head';
import Header from '../components/layout/main-header'
import Footer from '../components/layout/footer'
import ProductsHeroSecion from '../components/products/products-hero-section'
import ProductsCategoriesNav from '../components/products/products-categories-nav'
import LangSwitch from '../components/layout/langswitch'

import { useCart } from "react-use-cart";

function CartPage(props) {
  const categories = props.allcategories;
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  let content;
    if (isEmpty){
      content = <div className="text-center">
      <p>لا يوجد لديك منتجات في السلة.</p>
      </div>
    } else (
      content = <div className="mx-6 shadow-xl" style={{"margin-top": "-200px"}}>
      <div className=" py-6 px-4 sm:px-6">
          <h1 className="text-lg font-bold">منتجاتك</h1>
          <ul className="-my-6 divide-y divide-gray-200">
            {items.map((item) => (
            <li className="w-full flex flex-wrap md:flex-nowrap md:items-start items-center justify-between">
              <div className="md:w-1/3 w-1/2 flex items-start justify-start">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border 
                border-gray-200">
                <Image width="885" height="891"
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                /> 
                </div>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              </div>
              <div className="md:w-1/3 w-1/2 flex flex-col items-end">
                  <p className="text-lg font-medium text-gray-900">{item.price}</p>
                  <div className='md:w-1/5 w-1/3 flex justify-ceendnter items-center 
                  border border-gray-500'>
                    <button className="w-1/3 h-full font-medium bg-orange-500 hover:bg-orange-700 text-white"
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <p className="w-1/3 h-full text-center m-auto font-medium">{item.quantity}</p>
                    <button className="w-1/3 h-full font-medium bg-orange-500 hover:bg-orange-700 text-white"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                </div>
              </div>
              <div className="md:w-1/3 w-full text-end">
                    <button type="button" className="font-medium text-orange-700 hover:text-orange-500"
                    onClick={() => removeItem(item.id)}>إزالة</button>
              </div>
            </li>
            ))}
            </ul>
      </div>
      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
        <p>السعر الإجمالي:</p>
        <p>{cartTotal}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">الشحن والضرائب تحسب عند الخروج.</p>
        <div className="mt-6">
        <a href="#" className="flex items-center justify-center rounded-md border border-transparent 
        bg-orange-500 px-6 py-3 text-base font-medium 
        text-white shadow-sm hover:bg-orange-700">الشراء</a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
        <span className="font-medium">أو&nbsp; </span>
            <button type="button" className="font-medium text-orange-500 hover:text-orange-700">
            تابع التسوّق
            <span aria-hidden="true"> &larr;</span>
            </button>
        </p>
        </div>
      </div>
    </div>
    )
  
    return (
      <>
    <Head>
        <title>My Cart</title>
        <meta
          name='description'
          content=''
        />
      </Head>
      <LangSwitch />
      <Header />
      <ProductsHeroSecion image="/productsbg.jpg"/>

      <ProductsCategoriesNav categories={categories}/>
      {content}
      <Footer />
    </>
    )
}
export async function getStaticProps() {
  const categories = await axios.get("http://127.0.0.1:8000/api/categories");
  const products = await axios.get("http://127.0.0.1:8000/api/products");

 return {
    props: {
      allcategories: categories.data,
      allproducts: products.data,
    },
    revalidate: 30
  };
}
export default CartPage;