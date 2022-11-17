import { useContext } from 'react';
import { Fragment } from 'react';
import axios from '../../lib/axios';

import Head from 'next/head';
import Header from '../../components/layout/main-header'
import Footer from '../../components/layout/footer'
import ProductsHeroSecion from '../../components/products/products-hero-section'
import ProductsCategoriesNav from '../../components/products/products-categories-nav'
import LangSwitch from '../../components/layout/langswitch'

import { useCart } from "react-use-cart";
// import Productfrom '../../components/products/products';

function CartPage(props) {
  const categories = props.allcategories;
  const products = props.allproducts;
    const {
      isEmpty,
      totalItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
  
    if (isEmpty) return<Fragment>
    <Head>
    <title>My Cart</title>
    <meta
      name='description'
      content=''
    />
    </Head>
    <LangSwitch />
    <Header />
    <ProductsHeroSecion />
    <ProductsCategoriesNav categories={categories}/>
    <div className="text-center">
    <p>You don't have any products yet. Start adding some?</p>
    </div>
    <Footer />
    </Fragment>;
  
    return (
      <Fragment>
    <Head>
        <title>My Cart</title>
        <meta
          name='description'
          content=''
        />
      </Head>
      <LangSwitch />
      <Header />
      <ProductsHeroSecion />

      <ProductsCategoriesNav categories={categories}/>
      <h1>Cart ({totalItems})</h1>
      <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity} x {item.title} &mdash;
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
            </li>
          ))}
        </ul>
      <Footer />
    </Fragment>
    );
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
