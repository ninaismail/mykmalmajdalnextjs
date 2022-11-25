import Link from "next/link"

 function Type(props) {
    const { id, name,href } = props;
    const exploreLink = `/types/${id}`;  
  return (
<>
<button href={exploreLink}>
  <h3 className="font-Roboto font-bold text-center hover:text-orange-500">{name}</h3>
</button>
</>
);
}
export default Type;
