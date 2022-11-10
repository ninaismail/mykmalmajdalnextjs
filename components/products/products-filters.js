import { useRef } from 'react';
import {BiChevronDown} from 'react-icons/bi'

function ProductsFilters(props) {

  return (
<div className="shadow-xl md:w-1/6 sm:w-1/3 w-1/3 top-0 relative right-0 mx-6"style={{"margin-top": "-140px"}}>
<select id="pricefilter" className="bg-orange-500 text-white border border-orange-500
rounded-lg block w-full px-6 py-3">
  <option className="bg-white text-black"selected>رتّب بحسب:</option>
  <option className="bg-white text-black"value="pricehtol">السعر من الأعلى للأدنى</option>
  <option className="bg-white text-black"value="priceltoh">السعر من الأدنى للأعلى</option>
</select>
<BiChevronDown color="white" size="30px" className='absolute left-2 top-10 z-10'/>
</div>
  );
}

export default ProductsFilters;