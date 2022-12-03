import Category from "./category"
import Image from 'next/image'
import Link from "next/link"

function CategoriesNav(props) {
  const { categories } = props;
  const allcategorieslink = `/categories`;  

  return (
<div dir="rtl"className="flex flex-wrap justify-center">
<div className="relative lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Link href={allcategorieslink}>
       <Image src='/categories/allcategories.jpg' width="258" height="255" 
       layout="responsive" objectFit="cover"
        alt='جميع المنتجات' className="rounded-full mx-auto mb-15"/>
       <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
       جميع المنتجات</h2>
    </Link>
  </div>
{Array.isArray(categories)&&categories.map((category) => (
 <Category 
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

export default CategoriesNav;