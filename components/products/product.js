import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import {BiShoppingBag} from 'react-icons/bi'
import Image from 'next/image'
import Link from "next/link"
    
export default function Product(props) {
    // const { id, title, image,  price } = props;

    const productsCtx = useContext(CartContext);
    const itemIsAddedtoCart = productsCtx.itemIsAddedtoCart(props.id);

    function toggleInCartStatusHandler() {
      if (itemIsAddedtoCart) {
        productsCtx.removeProductfromCart(props.id);
        console.log("hi")
      } else {
        productsCtx.addProducttoCart({
          id: props.id,
          title: props.title,
          price: props.price,
          image: props.image,
        });
        console.log("yuh")
      }
    } 
    const exploreLink = `/products/${props.id}`;  
    return (
    <div key={props.id} className="text-center">
    <Link href={exploreLink} >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image width="885" height="891"
            src={props.image}
            alt={props.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        </div>
        <h3 className="mt-4 text-xl font-bold">{props.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{props.price}</p>
    </Link>
    <button className='bg-orange-500 px-6 py-2 w-full hover:bg-orange-700 rounded-lg 
    border-orange-500 hover:border-orange-700 text-white' onClick={toggleInCartStatusHandler}>
    {itemIsAddedtoCart ? 'Remove from Cart' : 'To Cart!'}
    <BiShoppingBag size="30px"color="white" className="inline cursor-pointer mx-auto"/>
    </button>
    </div>
    )
  }