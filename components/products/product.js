import { useCart } from "react-use-cart";

import {BiShoppingBag} from 'react-icons/bi'
import Image from 'next/image'
import Link from "next/link"
    
export default function Product(props) {
    const { products } = props;
    const { addItem } = useCart();
    return (
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
    )
  }