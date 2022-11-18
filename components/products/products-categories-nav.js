import ProductsCategory from "./products-category"
import Image from 'next/image'
import Link from "next/link"

function ProductsCategoriesNav(props) {
  const { categories } = props;
  const allcategorieslink = `/categories`;  

  return (
<div dir="rtl"className="relative right-0 bottom-[18em] flex flex-wrap justify-center">
<div className="relative lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7 w-full h-ful">
    <Link href={allcategorieslink} className="flex items-center justify-center">
       <Image src='/categories/allcategories.jpg' width="258" height="255" alt='جميع المنتجات' className="rounded-full mx-auto mb-15"/>
       <h2 className="absolute font-Roboto text-center font-bold md:text-4xl text-2xl">
       جميع المنتجات</h2>
    </Link>
  </div>
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