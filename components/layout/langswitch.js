import React, { useState , useRef} from "react";
const LangSwitch = () => {
  const [style, setStyle] = useState({display: 'none'});
  const [lang, setLang] = useState("AR");
  const [lang1, setLang1] = useState("EN");
  return (
<div className="sticky top-0 h-auto z-10">
    <div class="absolute"
        onMouseLeave={e => {
        setStyle({display: 'none'})
    }}>
    <button class="block bg-black text-white hover:bg-gray-700 font-bold py-2 px-4"
    onMouseEnter={e => {
        setStyle({display: 'block'})
        setLang("EN");
        setLang1("AR")
    }}
    onMouseLeave={e => {
        setLang("AR");
        setLang1("EN")
    }}>
        {lang}
    </button>
    <button style={style} class="block bg-black text-white hover:bg-gray-700 font-bold py-2 px-4">
        {lang1}
    </button>
    </div>
</div>
  );
};

export default LangSwitch;