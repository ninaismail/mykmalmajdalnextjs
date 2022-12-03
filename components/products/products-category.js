import Image from 'next/image'
import Link from "next/link"

export default function ProductsCategory(props) {
    const { id, name, image, href } = props;
    const exploreLink = `/categories/${id}`;  
  return (
<div className="relative lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7 w-full h-full">
<Link href={exploreLink} className="flex items-center justify-center">
<Image src={image} width="258" height="255" alt={name} className="rounded-full mx-auto mb-15"/>
<div className="w-full h-full text-transparent hover:text-black flex items-center justify-center rounded-full hover:bg-orange-300 hover:opacity-75 transition-all absolute">
<h2 className="text-center font-bold md:text-4xl text-2xl">
 {name}
</h2></div>
</Link>
</div>
  );
}

