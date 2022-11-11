import Image from 'next/image'
import ProductsCategoriesNav from './products-categories-nav';
function ProductsHeroSection() {
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
<div className="relative right-0 bottom-[11em]">
  <div className="flex items-center justify-center w-full">
      <Image src="/productsbg.jpg" width="1920"height="1245"                          
      layout="responsive"objectFit="cover"alt="Km Almajdal" className='lg:h-screen' />
      <h1 className="font-RobotoSlab absolute md:text-8xl text-4xl text-white font-bold z-100">الأصناف</h1>
  </div>
  <ProductsCategoriesNav categories={categories}/>
</div>
  );
} 


export default ProductsHeroSection;