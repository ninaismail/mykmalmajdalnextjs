import axios from '../../lib/axios';

import Head from 'next/head'
import Header from '../../components/layout/main-header'
import Footer from '../../components/layout/footer'
import ProductsHeroSecion from '../../components/products/products-hero-section'
import LangSwitch from '../../components/layout/langswitch'

import Products from '../../components/products/products';
import Branches from '../../components/branches'
import ProductsCategoriesNav from '../../components/products/products-categories-nav'

export default function ProductsPage(props) {
  const categories = props.allcategories;
  const products = props.allproducts;
  
    return (
      <div>
      <Head>
        <title>All Categories</title>
        <meta title="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LangSwitch />
      <Header />
      <ProductsHeroSecion image="/productsbg.jpg"/>

      <ProductsCategoriesNav categories={categories}/>
         
     
      <Products products={products} />
   
      <Branches/>
      <Footer />
      </div>
    )
  }
  export async function getStaticProps(context) {
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
 