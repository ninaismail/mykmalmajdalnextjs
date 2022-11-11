import ProductsCategory from "./products-category"

function ProductsCategoriesNav() {
  const { categories } = props;
  
  return (
<div dir="rtl"className="relative right-0 bottom-[5em] flex flex-wrap justify-center">
{Array.isArray(categories)&&categories.map((category) => (
 <ProductsCategory 
 key={category.id}
 id={category.id}
 name={category.name}
 image={category.image}
 />
))}  
</div>
  );
}

export default ProductsCategoriesNav;