import { useEffect, useState } from 'react';
import {BiChevronDown} from 'react-icons/bi'

function ProductsFilters() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('default');
// call the API on initial load only
 useEffect(() => {
  fetchData();
}, [sortType]);

const fetchData = async () => {
  const products =  await fetch("http://127.0.0.1:8000/api/products");

  const data = await products.json();
  // using API response data as an input to sortData function
  sortData(data)
};

// using data from parameter instead of state
function sortData(data) {
  let sortedData;
  if (sortType === 'descending') {
    sortedData = [...data].sort((a, b) => {
      return b.price.localeCompare(a.price);
    });
  } else if (sortType === 'ascending') {
    sortedData = [...data].sort((a, b) => {
      return a.price.localeCompare(b.price);
    });
  } else {
    return data;
  }
  setData(sortedData);
}
    return (
<div className="shadow-xl md:w-1/6 sm:w-1/3 w-1/3 top-0 relative right-0 mx-6" style={{"margin-top": "-180px"}}>
<select id="pricefilter" className="bg-orange-500 text-white border border-orange-500
rounded-lg block w-full px-6 py-3" defaultValue='default'
onChange={(e) => setSortType(e.target.value)}
>
  <option className="bg-white text-black"disabled value="default">رتّب بحسب:</option>
  <option className="bg-white text-black"value="descending">السعر من الأعلى للأدنى</option>
  <option className="bg-white text-black"value="ascending">السعر من الأدنى للأعلى</option>
</select>
<BiChevronDown color="white" size="30px" className='absolute left-2 top-2 z-100'/>
</div>
  );
}
export default ProductsFilters;