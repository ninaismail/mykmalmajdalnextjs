import axios from '../lib/axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import {BiShoppingBag} from 'react-icons/bi'

import Image from 'next/image'
import Link from "next/link"
import Head from 'next/head'

import ProductsHeroSecion from '../components/products/products-hero-section'

import Branches from '../components/branches'
import ProductsCategoriesNav from '../components/products/products-categories-nav'

export default function SearchedProducts(props) {
  const categories = props.allcategories;
  
  const router = useRouter();
  const searchendPoint = router.query.title
  console.log(searchendPoint)
  
  const [products, setProducts] = useState([])
  console.log(products)
  const [wrongsearch, setwrongsearch] = useState(false)
  console.log(wrongsearch)

  useEffect(() => {
    fetchData();
  }, [searchendPoint]);
  const fetchData = async () => {
    const searchedproducts =  await axios.get(`http://localhost:8000/api/search/${searchendPoint}`);
    var array =[];
    for (let i = 0; i < searchedproducts.data.length; i++) {
        array.push(searchedproducts.data[i])
   }
    setProducts(array)
    var size = Object.keys(searchedproducts.data).length;
    console.log(size)
    if (size === 0){
      setwrongsearch(true)
    }
  }

    return (
      <div>
      <Head>
        <title>Search Results</title>
        <meta title="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductsHeroSecion image="/productsbg.jpg"/>

      <ProductsCategoriesNav categories={categories}/>
      {wrongsearch ? <div className="my-10 bg-white border border-black shadow-xl px-6 py-4 
      relative z-1 w-3/4 lg:mt-[-100px] h-auto mx-auto rounded-lg">
      <h1 className="font-RobotoSlab my-6 md:text-6xl text-4xl text-center">
      لا يوجد منتجات.</h1> 
      </div>   
      : <div className="my-10 bg-white border border-black shadow-xl px-6 py-4 relative z-1 w-3/4 lg:mt-[-100px] h-auto mx-auto rounded-lg">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2
      lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-center items-center">
      {Array.isArray(products)&&products.map((product) => (
          <div key={product.id} className="text-center">
          <Link href={`/products/${product.id}`} >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <Image width="885" height="891"
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
              </div>
              <h3 className="mt-4 text-xl font-bold">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </Link>
          <button className='bg-orange-500 px-6 py-2 w-full hover:bg-orange-700 rounded-lg 
          border-orange-500 hover:border-orange-700 text-white' onClick={() => addItem(product)}>
          <BiShoppingBag size="30px"color="white" className="inline cursor-pointer mx-auto"/>
          </button>
          </div>
      ))}
      </div>   
      </div>}   
      <Branches/>
      </div>
    )
  }
  export async function getStaticProps(context) {
    const categories = await axios.get("http://127.0.0.1:8000/api/categories");
    return {
      props: {
        allcategories: categories.data,
      },
      revalidate: 30
    };
  }