import Image from 'next/image'

function ProductsHeroSection(props) {
const {image, title}=props;
return (
<div className="relative right-0 bottom-[11em]">
  <div className="flex items-center justify-center w-full h-full">
      <Image src={image} width="1920"height="1245"                          
      layout="responsive"objectFit="cover"alt="Km Almajdal" className='h-screen' />
      <h1 className="font-RobotoSlab absolute md:text-8xl text-4xl text-white font-bold z-100">{title}</h1>
  </div>
</div>
  );
} 


export default ProductsHeroSection;