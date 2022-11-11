import Image from 'next/image'
import Link from "next/link"

export function Category(props) {
    const { id, name, image } = props;
    const exploreLink = `/${name}`;  
  return (
<Link href={exploreLink}>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
   <Image src={image} width="258" height="255" alt={name} className="rounded-full mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   {name}   
   </h2>
  </div>
</Link>
  );
}

