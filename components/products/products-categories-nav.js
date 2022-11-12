import ProductsCategory from "./products-category"

function ProductsCategoriesNav(props) {
  const { categories } = props;
  
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

export default ProductsCategoriesNav;