import CategoriesGrid from './categories-gid'
import CategoriesGallery from './categories-gallery'
import CategoriesNav from './category/categories-nav';

function CategoriesSection(props) {
  const { categories } = props;

return (
    <div className="text-center mx-6 my-4" style={{"margin-top": "-140px"}}>
<h1 className="font-RobotoSlab mb-6 md:text-6xl text-4xl">
الأصناف
</h1>
<CategoriesNav categories={categories}/>
<CategoriesGrid/>
<CategoriesGallery/>
    </div>
  );
}

export default CategoriesSection;