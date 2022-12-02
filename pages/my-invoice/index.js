import { useCart } from "react-use-cart";
import {useRouter} from 'next/router'

import Head from 'next/head';
import Header from '../../components/layout/main-header'
import Footer from '../../components/layout/footer'
import ProductsHeroSecion from '../../components/products/products-hero-section'
import LangSwitch from '../../components/layout/langswitch'
import {BsWhatsapp} from 'react-icons/bs'

function myInvoicePage() {
    const router = useRouter();
    const invoice = router.query
    console.log(invoice);
    const {
        cartTotal,
        items,
      } = useCart();
    return (
      <>
    <Head>
        <title>Your Invoice</title>
        <meta
          name='description'
          content=''
        />
      </Head>
      <LangSwitch />
      <Header />
      <ProductsHeroSecion image="/cartbg.jpg" title="نسعد في خدمتك دائماً..."/>

<div className="mx-auto shadow-xl w-4/5" style={{"margin-top": "-100px"}}>
    <div class="w-full bg-gray-200 p-4">
        <h2 class="text-xl font-bold">To confirm your order, contact us on WhatsApp by clicking on the button below, test1!</h2>
        <p className="font-Roboto mt-4">للتأكيد و ارسال تفاصيل طلبك,الرجاء النقر على الزر أدناه.</p>
        <button className='bg-orange-500 px-6 py-2 w-full hover:bg-orange-700 rounded-lg 
        border-orange-500 hover:border-orange-700 text-white'>
        أرسل تفاصيل الطلب<BsWhatsapp size="20px"color="white" className="inline cursor-pointer mx-auto"/>
        </button>
    </div>
    <div class="w-full flex justify-start flex-wrap items-start">
       <div className='border-l border-gray-200 p-2'>
        <h2 class="text-xl font-bold">رقم الطلب:</h2>
        <p className="font-Roboto mt-4">{invoice.id}</p>
       </div>
       <div className='border-l border-gray-200 p-2'>
        <h2 class="text-xl font-bold">التاريخ:</h2>
        <p className="font-Roboto mt-4">{invoice.created_date}</p>
       </div>
       <div className='border-l border-gray-200 p-2'>
        <h2 class="text-xl font-bold">الإجمالي:</h2>
        <p className="font-Roboto mt-4">{invoice.grandtotal}</p>
       </div>
       <div className='border-l border-gray-200 p-2'>
        <h2 class="text-xl font-bold">وسيلة الدفع:</h2>
        <p className="font-Roboto mt-4">{invoice.payment_methde}</p>
       </div>
    </div>
    <div class="w-full">
        <div class="pt-12 md:pt-0 2xl:ps-4">
            <h2 class="text-xl font-bold  bg-gray-200 py-4 border border-gray-300">تفاصيل الطلب</h2>
            <div class="mt-8 flex justify-between items-center py-4 border-b border-gray-300">
                <h2 class="font-Roboto text-xl font-bold">المنتج</h2>
                <h2 class="font-Roboto text-xl font-bold">المجموع</h2>
            </div>                        
            {items.map((item) => (      
            <div class="flex justify-between items-center py-4 font-semibold border-b border-gray-300">
                <div class="flex justify-between items-center"><h2>{item.title}</h2><p>{item.quantity}x</p></div> 
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
            <p className="font-Roboto mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
            &nbsp; <span className="text-sm text-orange-500 hover:underline">سياسة الخصوصية.</span></p>
        <div class="mt-4">
            <input type="submit" value="الرجاء متابعة الطلب عبر النقر على زر الواتساب في الصفحة التالية"
            className="cursor-pointer flex items-center justify-center rounded-md border border-transparent 
            bg-orange-500 px-6 py-3 text-center font-medium text-white shadow-sm hover:bg-orange-700"/>
        </div>
    </div>
</div>
       <Footer />
    </>
    )
}
export default myInvoicePage;