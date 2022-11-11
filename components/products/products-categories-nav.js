import ProductsCategory from "./products-category"

function ProductsCategoriesNav(props) {
  const { productscategories } = props;
  
  return (
<div dir="rtl"className="relative right-0 bottom-[5em] flex flex-wrap justify-center">
{Array.isArray(productscategories)&&productscategories.map((productscategory) => (
 <ProductsCategory 
 key={productscategory.id}
 id={productscategory.id}
 name={productscategory.name}
 href={productscategory.href}
 image={productscategory.image}
 />
))}  
</div>
  );
}

export default ProductsCategoriesNav;