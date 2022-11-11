import Image from 'next/image'

function ProductsHeroSection() {

return (
<div className="relative right-0 bottom-[11em]">
  <div className="flex items-center justify-center w-full">
      <Image src="/productsbg.jpg" width="1920"height="1245"                          
      layout="responsive"objectFit="cover"alt="Km Almajdal" className='lg:h-screen' />
      <h1 className="font-RobotoSlab absolute md:text-8xl text-4xl text-white font-bold z-100">الأصناف</h1>
  </div>
</div>
  );
} 


export default ProductsHeroSection;