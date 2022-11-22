import Type from "./type"

function typesNav(props) {
  const { types } = props;

  return (
<div dir="rtl"className="relative z-100 mx-auto mb-4 flex flex-wrap justify-between items-center">
{Array.isArray(types)&&types.map((type) => (
 <Type 
 key={type.id}
 id={type.id}
 name={type.name}
 href={type.href}
 />
))} 
</div>
  );
}

export default typesNav;