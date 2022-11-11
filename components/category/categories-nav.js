import Category from "./category"

function CategoriesNav(props) {
  const { categories } = props;

  return (
<div dir="rtl"className="flex flex-wrap justify-center">
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