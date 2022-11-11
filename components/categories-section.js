import Image from 'next/image'
import CategoriesGrid from './categories-gid'
import CategoriesGallery from './categories-gallery'
import CategoriesNav from './category/categories-nav';

function CategoriesSection() {
const categories = [
  {
    id: 1,
    name: 'جميع المنتجات',
    href: '/allcategories',
    image: '/categories/allcategories.jpg',
  },
  {
    id: 2,
    name: 'المكسرات',
    href: '/category-nuts',
    image: '/categories/nuts.jpg',
  },
  {
    id: 3,
    name: 'قهوة',
    href: '/category-coffee',
    image: '/categories/coffee.jpg',
  },
  {
    id: 4,
    name: 'البسكويت',
    href: '/category-cookies',
    image: '/categories/cookies.jpg',
  },
  {
    id: 5,
    name: 'جندويات',
    href: '/category-jandawiyat',
    image: '/categories/coconut.jpg',
  },
  {
    id: 6,
    name: 'فواكه',
    href: '/category-fruits',
    image: '/categories/fuits.jpg',
  },
  {
    id: 7,
    name: 'شوكولاته',
    href: '/category-chocolate',
    image: '/categories/chocolate.jpg',
  },  
]  
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