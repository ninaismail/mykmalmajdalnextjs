import { useCart } from "react-use-cart";
import { useState, useEffect } from 'react';

import {BiShoppingBag} from 'react-icons/bi'
import Image from 'next/image'
import Link from "next/link"
import {BiChevronDown} from 'react-icons/bi'

export default function ProductsByCategory(props) {
    const { categoryId } = props;

    const { addItem } = useCart();
    const [type, setType] = useState("جميع الفئات");
    const [sortPrice, setPriceOrder] = useState("default");
    const [data, setData] = useState([]);
    const [uniquetypes, setuniqueTypes] = useState([]);

     useEffect(() => {
      fetchData();
    }, [sortPrice]);
     const fetchData = async () => {
      const products =  await fetch(`http://127.0.0.1:8000/api/categories/${categoryId}/product`);
      const data = await products.json();
      sortData(data)
      uniqueTypes(data)

    };
    function uniqueTypes(data){
      let thetypes;
      let uniques = [];
    
       thetypes = Array.from(new Set([...data].map(a => a.type_id)))
     .map(type_id => {
       return [...data].find(a => a.type_id === type_id)
     })
      uniques = [...new Set(thetypes)];
      console.log(uniques)
      console.log(uniques[0])
    
      setuniqueTypes(uniques)
    }
    function sortData(data) {
      let sortedData;
      if (sortPrice === 'descending') {
        sortedData = [...data].sort((a, b) => {
          return b.price - a.price;
        });
      } else if (sortPrice === 'ascending') {
        sortedData = [...data].sort((a, b) => {
          return a.price - b.price;
        });
      } else if (sortPrice === 'default') {
        sortedData = data;
      }
      setData(sortedData);
    }
    function DatabyType(data) {
      let DataByType;
      let uniques = [];

       if(type === '1 كغ'){
        DataByType = [...data].map(a => a.type_id)
        .map(type_id => {
          return [...data].find(a => a.type_id === 1)
        })
      }else if(type === '5 كغ'){
        DataByType = [...data].map(a => a.type_id)
        .map(type_id => {
          return [...data].find(a => a.type_id === 2)
        })      
      }else if(type === 'شوكولاته'){
        DataByType = [...data].map(a => a.type_id)
        .map(type_id => {
          return [...data].find(a => a.type_id === 4)
        })
      }else if(type === 'سابوري'){
        DataByType = [...data].map(a => a.type_id)
        .map(type_id => {
          return [...data].find(a => a.type_id === 3)
        })
      }else if(type === 'جميع الفئات'){
          return DataByType = data
      }
      uniques = [...new Set(DataByType)];

      setData(uniques);
      console.log(uniques)

    }
    return (
        <>
<div className="shadow-xl md:w-1/6 sm:w-1/3 w-1/3 top-0 relative right-0 mx-6" style={{"margin-top": "-180px"}}>
<select id="pricefilter" className="bg-orange-500 text-white border border-orange-500
rounded-lg block w-full px-6 py-3" defaultValue='default' value={sortPrice}
onChange={(e) => {
  setPriceOrder(e.target.value);
}}>
  <option className="bg-white text-black" value="default">رتّب بحسب:</option>
  <option className="bg-white text-black" value="descending">السعر من الأعلى للأدنى</option>
  <option className="bg-white text-black" value="ascending">السعر من الأدنى للأعلى</option>
</select>
<BiChevronDown color="white" size="30px" className='absolute left-2 top-2 z-100'/>
</div>
<div className="my-10 bg-white border border-black shadow-xl px-6 py-4 relative z-1 w-3/4 h-auto mx-auto rounded-lg">
<div dir="rtl"className="relative z-100 mx-auto mb-4 flex flex-wrap justify-between items-center">
<input type='submit'className="cursor-pointer font-Roboto font-bold text-center hover:text-orange-500" 
  value='جميع الفئات'
  onClick={(e) => {
    setType(e.target.value);}}/>
{Array.isArray(uniquetypes)&&uniquetypes.map((uniquetype) => ( 
  <input type='submit'className="cursor-pointer font-Roboto font-bold text-center hover:text-orange-500" 
  key={uniquetype.type.id} value={uniquetype.type.name}
  onClick={(e) => {
    setType(e.target.value);}}/>
))}  
</div>
<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2
lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-center items-center">
{Array.isArray(data)&&data.map((product) => (
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
</div></div>
    </>
    )
  }