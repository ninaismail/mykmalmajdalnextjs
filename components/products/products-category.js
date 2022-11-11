import Image from 'next/image'
import Link from "next/link"

export default function ProductsCategory(props) {
    const { id, name, image, href } = props;
    const exploreLink = `/${href}`;  
  return (
<div className="relative lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7 flex items-center justify-center w-full h-ful">
<Link href={exploreLink}>
<Image src={image} width="258" height="255" alt={name} className="rounded-full mx-auto mb-15"/>
<h2 className="absolute font-Roboto text-center font-bold md:text-4xl text-2xl">
 {name}
</h2>
</Link>
</div>
  );
}

