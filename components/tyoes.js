import Image from 'next/image'
import AllTypesofProducts from './alltypes'

function TypesofProducts() {
  return (
    <div className="text-center mx-6 my-4" style={{"margin-top": "-140px"}}>
<h1 className="font-RobotoSlab mb-6 md:text-6xl text-4xl">
الأصناف
</h1>
<div dir="rtl"className="flex flex-wrap justify-center">
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
   <Image src="/1.jpg" width="258" height="255" alt="جميع المنتجات" class="mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   جميع المنتجات
   </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/7.jpg" width="258" height="255" alt="المكسرات" class="mx-auto mb-15"/>
    <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
    المكسرات
    </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/6.jpg" width="258" height="255" alt="قهوة" class="mx-auto mb-15"/>
    <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
    قهوة
    </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/5.jpg" width="258" height="255" alt="البسكويت" class="mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
    البسكويت
   </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/4.jpg" width="258" height="255" alt="جندويات" class="mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   جندويات
   </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/3.jpg" width="258" height="255" alt="فواكه" class="mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   فواكه
   </h2>
  </div>
  <div className="lg:flex-1 w-1/3 md:w-1/4 lg:w-1/7">
    <Image src="/2.jpg" width="258" height="255" alt="شوكولاته" class="mx-auto mb-15"/>
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   شوكولاته
   </h2>
  </div>  
</div>
<AllTypesofProducts/>
    </div>
  );
}

export default TypesofProducts;