import axios from '../lib/axios';
import Image from "next/image";

import Head from 'next/head';
import Header from '../components/layout/main-header'
import Footer from '../components/layout/footer'
import ProductsHeroSecion from '../components/products/products-hero-section'
import LangSwitch from '../components/layout/langswitch'

import { useCart } from "react-use-cart";

function CheckoutPage(props) {
  const {
    cartTotal,
    items,
    quantity
  } = useCart();
  
    return (
      <>
    <Head>
        <title>Checkout</title>
        <meta
          name='description'
          content=''
        />
      </Head>
      <LangSwitch />
      <Header />
      <ProductsHeroSecion image="/cartbg.jpg" title="نسعد في
خدمتك دائماً..."/>

<div class="container p-12 mx-auto">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div class="flex flex-col md:w-full">
            <h2 class="mb-4 font-bold md:text-xl text-heading">تفاصيل الفاتورة </h2>
            <form class="w-full mx-auto" method="post" action>
            <div class="space-x-0 lg:flex lg:space-x-4">
                <div class="w-full lg:w-1/2">
                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">الاسم الأول *
                    </label>
                    <input name="firstName" type="text"             
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"/>
                </div>
                <div class="w-full lg:w-1/2 ">
                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">الاسم الأخير *
                    </label>
                    <input name="Last Name" type="text"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"/>
                </div>
            </div>    
                <div class="mt-4 w-full">
                    <label for="company"
                    class="block mb-3 text-sm font-semibold text-gray-500">
                    اسم الشركة (اختياري)</label>
                    <input name="company" type="text"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"/>                                
                </div>
                <div class="mt-4 w-full">
                    <label class="block mb-3 text-sm font-semibold text-gray-500">
                    الدولة / المنطقة *</label>                                    
                    <label class="block mb-3 text-sm font-bold text-gray-500">
                    المملكة العربية السعودية</label>
                </div>
                <div class="mt-4 w-full">
                    <label for="City"
                    class="block mb-3 text-sm font-semibold text-gray-500">
                    المدينة *</label>
                    <input name="city" type="text"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"/>
                </div>
                <div class="mt-4 w-full">
                    <label for="region"
                    class="block mb-3 text-sm font-semibold text-gray-500">
                    المنطقة *</label>
                    <input name="region" type="text"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"/>                            
                </div>
                <div class="w-full mt-4">
                    <label for="phone" class="block mb-3 text-sm font-semibold text-gray-500">
                    الهاتف *</label>
                    <input name="phone" type="text" 
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"/>  
                </div>
                <div class="w-full mt-4 relative pt-3 xl:pt-6">
                    <h2 class="mb-4 font-bold md:text-xl text-heading ">تفاصيل الفاتورة
                    </h2>
                    <label for="note"
                    class="block mb-3 text-sm font-semibold text-gray-500">ملاحظات الطلب (اختياري)
                    </label><textarea name="note"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                    focus:ring-1 focus:ring-orange-700"
                    rows="4" placeholder="Notes for delivery"></textarea>
                </div>
            </form>
        </div>
        <div class="w-full ml-0 lg:ml-12 lg:w-2/5">
            <div class="pt-12 md:pt-0 2xl:ps-4">
                <h2 class="text-xl font-bold">طلبك </h2>
                <div class="mt-8 flex justify-between items-center">
                    <h2 class="font-Roboto text-xl font-bold">المنتج</h2>
                    <h2 class="font-Roboto text-xl font-bold">المجموع</h2>
                </div>                        
                    {items.map((item) => (                
                    <div class="mt-8 flex justify-between items-center font-semibold">
                    <div><h2>{item.title}</h2><p>{quantity}</p></div> 
                    <div><p>{item.price}</p></div>
                    </div> 
                    ))}                     
                </div>
                <div class="flex items-center justify-between w-full py-4 font-Roboto font-bold border-b border-gray-300">
                    <h2>ضريبة القيمة المضافة</h2><p>10.50</p></div>
                <div class="flex items-center justify-between w-full py-4 font-Roboto font-bold border-b border-gray-300">
                    <h2>الإجمالي</h2><p>{cartTotal + 10.50}</p></div>
                <div class="w-full py-4 font-Roboto font-bold border-b border-gray-300">
                    <h2>الدفع نقدًا عند الإستلام</h2>
                    <p class="ml-2">الدفع عند التسليم مباشرة.</p></div>
                <div class="mt-4">
                    <button className="px-6 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-700">
                    الرجاء متابعة الطلب عبر النقر على زر الواتساب في الصفحة التالية         
                    </button>
                </div>
            </div>
    </div>
</div>
      <Footer />
    </>
    )
}
export default CheckoutPage;
