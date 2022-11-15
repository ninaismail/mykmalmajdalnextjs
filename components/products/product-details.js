import {BiShoppingBag} from 'react-icons/bi'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function ProductDetails(props) {
    const { title, description, image,image2,image3,image4, price, category_id } = props;
    //   const gobacklink = `/categories/${category_id}`; 
    const [mainimage, setMainImage] = useState(0);

    return (
    <div className="my-10 bg-white border border-black shadow-xl px-6 py-4 
     relative z-1 w-3/4 h-auto mx-auto rounded-lg"style={{"margin-top": "-180px"}}>
      <div className="md:flex justify-center items-center">
        <div className="md:w-1/2">
            <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
                {title}   
            </h2>
            <p className="font-Roboto">{description}</p>
            <h2 className="font-Roboto font-bold mt-4 md:text-4xl text-2xl">
                {price}   
            </h2>           
        </div>
        <div className="md:w-1/2 md:flex md:justify-center md:items-center">
          <div className="md:w-2/3 w-full">
          {mainimage == 0 && <Image width="885" height="891"
            src={image}
            alt={title}
            className="hover:opacity-75"
            />} {mainimage == 1 && <Image width="885" height="891"
            src={image2}
            alt={title}
            className="hover:opacity-75 "
            />} {mainimage == 2 && <Image width="885" height="891"
            src={image3}
            alt={title}
            className="hover:opacity-75 "
            />} {mainimage == 3 && <Image width="885" height="891"
            src={image4}
            alt={title}
            className="hover:opacity-75 "
            />}                 
          </div>
          <div className="md:w-1/3 w-full flex flex-row md:block">
          <Image width="885" height="891"
            src={image2}
            alt={title}
            className="hover:opacity-75 w-1/3 md:w-full cursor-pointer"
            onClick={() => setMainImage(1)}/>               
            <Image width="885" height="891"
            src={image3}
            alt={title}
            className="hover:opacity-75 w-1/3 md:w-full cursor-pointer"
            onClick={() => setMainImage(2)}/>               
            <Image width="885" height="891"
            src={image4}
            alt={title}
            className="hover:opacity-75 w-1/3 md:w-full cursor-pointer"
            onClick={() => setMainImage(3)}/>               
          </div>
        </div>
     </div>    
     <div className="md:w-1/2 md:flex justify-center items-center">
            <div className="md:w-1/3 w-full my-2">
            <input
                type="number"
                class="form-control w-full px-3 py-1.5
                text-base font-Roboto bg-white bg-clip-padding
                border border-solid border-gray-300 rounded
                transition ease-in-out m-0 focus:bg-white focus:outline-none"
                id="quantityinput"
                placeholder="الكمية"
            />
            </div>            
            <div className="md:w-2/3 w-full md:mr-2">
            <button className='bg-orange-500 px-6 py-2 w-full 
            text-white hover:bg-orange-700 rounded-lg 
            border-orange-500 text-sm hover:border-orange-700'>إضافة إلى السلة
            <BiShoppingBag size="20px"color="white" className='inline'/>
            </button>
            </div>
           </div> 
    </div>    
    )
  }