import Type from "./type"

function typesNav(props) {
  const { types } = props;

  return (
    <div className="my-10 bg-white border border-black shadow-xl px-6 py-4 relative z-1 w-3/4 h-auto mx-auto rounded-lg">
<div dir="rtl"className="relative z-100 mx-auto mb-4 flex flex-wrap justify-between items-center">
{Array.isArray(types)&&types.map((type) => (
 <Type 
 key={type.id}
 id={type.id}
 name={type.name}
 href={type.href}
 />
))} 
</div></div>
  );
}

export default typesNav;