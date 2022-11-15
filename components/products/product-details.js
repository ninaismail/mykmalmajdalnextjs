import {BiShoppingBag} from 'react-icons/bi'

export default function ProductDetails(props) {
    const { title, description, image,image2,image3,image4, price, category_id } = props;

    //   const gobacklink = `/categories/${category_id}`; 

    return (
    <div className="my-10 bg-white border border-black shadow-xl px-6 py-4 
     relative z-1 w-3/4 h-auto mx-auto rounded-lg">
      <div className="md:flex justify-center items-center">
        <div className="md:w-1/2">
            <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
                {title}   
            </h2>
            <p className="font-Roboto mb-4 md:text-2xl text-xl">{description}</p>
            <h2 className="font-Roboto font-bold mt-4 md:text-4xl text-2xl">
                {price}   
            </h2>           
            <div className="flex justify-center items-center">
            <div className="md:w-1/3">
            <input
                type="number"
                class="form-control w-full px-3 py-1.5
                text-base font-Roboto  bg-white bg-clip-padding
                border border-solid border-gray-300 rounded
                transition ease-in-out m-0 focus:bg-white focus:outline-none"
                id="quantityinput"
                placeholder="Quantitiy"
            />
            </div>            
            <div className="md:w-2/3">
            <button className='bg-orange-500 px-6 py-2 w-full hover:bg-orange-700 rounded-lg 
            border-orange-500 hover:border-orange-700'>إضافة إلى السلة
            <BiShoppingBag size="30px"color="white" className="mx-auto"/>
            </button>
            </div>
           </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="md:w-2/3">
            <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center hover:opacity-75"
            />                
          </div>
          <div className="md:w-1/3">
            <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center hover:opacity-75"
            />                
            <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center hover:opacity-75"
            />                
            <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center hover:opacity-75"
            />                                
          </div>
        </div>
     </div>     
    </div>    
    )
  }