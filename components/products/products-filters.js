import { useRef } from 'react';
import {BiChevronDown} from 'react-icons/bi'

function ProductsFilters() {
const priceorder = useRef();

function onChangeHandler(event) {
  event.preventDefault();
  //store the selected values
  const selectedpriceorder = priceorder.current.value; 
  //pass it as props
}
    return (
<div className="shadow-xl md:w-1/6 sm:w-1/3 w-1/3 top-0 relative right-0 mx-6" style={{"margin-top": "-180px"}}>
<select id="pricefilter" className="bg-orange-500 text-white border border-orange-500
rounded-lg block w-full px-6 py-3" defaultValue='default' ref={priceorder}
onChange={onChangeHandler}>
  <option className="bg-white text-black"disabled value="default">رتّب بحسب:</option>
  <option className="bg-white text-black"value="descending">السعر من الأعلى للأدنى</option>
  <option className="bg-white text-black"value="ascending">السعر من الأدنى للأعلى</option>
</select>
<BiChevronDown color="white" size="30px" className='absolute left-2 top-2 z-100'/>
</div>
  );
}
export default ProductsFilters;