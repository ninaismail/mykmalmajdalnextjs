import axios from '../../lib/axios';

import ProductsCategory from "./products-category"

function ProductsCategoriesNav(props) {
  const categories = props.allCategories;
  
  return (
<div dir="rtl"className="relative right-0 bottom-[18em] flex flex-wrap justify-center">
{Array.isArray(categories)&&categories.map((category) => (
 <ProductsCategory 
 key={category.id}
 id={category.id}
 name={category.name}
 href={category.href}
 image={category.image}
 />
))}  
</div>
  );
}
export async function getStaticProps()
{
  const response = await axios.get(`http://127.0.0.1:8000/api/categories`);
  return {
    props: {
      // Pass event data to the page via props
    allCategories: response.data
    }
  }
}  

export default ProductsCategoriesNav;