import Image from 'next/image'

function Branches() {
  return (
<div class="relative top-0 left-0 flex items-center justify-start text-white lg:h-screen w-full">
  <div class="relative">
        <Image src="/branchesbg.jpg" width="1916"height="740"                          
        layout="responsive"objectFit="cover"alt="Km Almajdal" />
  </div>
  <div class="absolute px-10 lg:px-24 z-10 text-right">
        <h1 className="font-RobotoSlab md:text-6xl text-4xl">
        فروعنا
        </h1>
        <ul className="font-Roboto font-bold md:text-4xl text-2xl my-10">
            <li>المنطقة الوسطى : الرياض (المركز الرئيسي)</li>
            <li>المنطقة الغربية : جدة</li>
            <li>المنطقة الجنوبية : خميس مشيط</li>
            <li>المنطقة الشرقية: الدمام-حفر الباطن </li>
        </ul>
        <p className="font-Roboto font-bold md:text-4xl text-2xl text-gray-500">تمتد خدمات فرعنا ضمن المدينة و ما حولها</p>
   </div>
</div>
  );
}

export default Branches;