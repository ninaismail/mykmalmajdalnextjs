import Image from 'next/image'

function AllTypesofProducts() {
  return (
<div dir="rtl"className="flex flex-wrap justify-center mt-6">
  <div className="lg:flex-1 w-full h-full lg:w-1/3 mx-6 my-4">
   <Image src="/2-1.jpg" width="597" height="880" alt="جميع المنتجات" className="bg-gray-700 mx-auto mb-15"/>
  <div className='relative bottom-0 top-[-9.7em] right-0 left-0 mx-auto'>
   <Image src="/sapore.png" width="154" height="120" alt="جميع المنتجات" className="mx-auto mb-15"/>  
   <Image src="/5-kg.png" width="166" height="91" alt="جميع المنتجات" className="mx-auto mb-15"/>  
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   عبوة تدعم ابداعك
   </h2>
   <button className="font-Roboto block p-3 mx-auto w-full text-xl
    bg-gray-100 hover:bg-white border rounded-full border-black-500 
    focus:ring-black-500 focus:border-black-500">تعرف على جميع المنتجات</button>    
  </div>
</div>
<div className="lg:flex-1 w-full h-full lg:w-1/3 mx-6 my-4">
   <Image src="/2-2.jpg" width="597" height="880" alt="جميع المنتجات" className="bg-gray-700 mx-auto mb-15"/>
  <div className='relative bottom-0 top-[-6.7em] right-0 left-0 mx-auto'>
   <Image src="/km-logo.png" width="121" height="61" alt="Food Options Logo" className="mx-auto mb-15"/>
   <Image src="/5-kg.png" width="166" height="91" alt="جميع المنتجات" className="mx-auto mb-15"/>  
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   عبوة بحجم طموحاتك
   </h2>
   <button className="font-Roboto block p-3 mx-auto w-full text-xl
    bg-gray-100 hover:bg-white border rounded-full border-black-500 
    focus:ring-black-500 focus:border-black-500">تعرف على جميع المنتجات</button>
  </div>
</div>
<div className="lg:flex-1 w-full h-full g:w-1/3 mx-6 my-4">
   <Image src="/2-3.jpg" width="597" height="880" alt="جميع المنتجات" className="bg-gray-700 mx-auto mb-15"/>
<div className='relative bottom-0 top-[-6.7em] right-0 left-0 mx-auto'>
   <Image src="/km-logo.png" width="121" height="61" alt="Food Options Logo" className="mx-auto mb-15"/>
   <Image src="/1-kg.png" width="166" height="91" alt="جميع المنتجات" className="mx-auto mb-15"/>  
   <h2 className="font-Roboto font-bold md:text-4xl text-2xl">
   عبوة تحلي عائلتك
   </h2>
   <button className="font-Roboto block p-3 mx-auto w-full text-xl
    bg-gray-100 hover:bg-white border rounded-full border-black-500 
    focus:ring-black-500 focus:border-black-500">تعرف على جميع المنتجات</button>
  </div>   
</div>   
</div>
  );
}

export default AllTypesofProducts;