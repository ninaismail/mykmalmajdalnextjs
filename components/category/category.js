import Image from 'next/image'
import Link from "next/link"

 function Category(props) {
    const { id, name, image,href } = props;
    const exploreLink = `/categories/${id}`;  
  return (
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
<Link href={exploreLink}>
   <Image src={image} priority width="258" height="255" alt={name} className="rounded-full mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   {name}   
   </h2>
</Link>
  </div>
);
}
export default Category;
