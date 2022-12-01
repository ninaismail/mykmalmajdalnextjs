import Link from "next/link";

import Head from 'next/head';
import Header from '../components/layout/main-header'
import Footer from '../components/layout/footer'
import ProductsHeroSecion from '../components/products/products-hero-section'
import LangSwitch from '../components/layout/langswitch'

import { useCart } from "react-use-cart";
import { useRef } from 'react'

function CheckoutPage(props) {
    const fnameRef = useRef()
    const lnameRef = useRef()
    const companyRef = useRef()
    const countryRef = useRef()
    const cityRef = useRef()
    const regionRef = useRef()
    const phoneRef = useRef()
    const noteRef = useRef()
    const taxRef = useRef()
    const subtotalRef = useRef()
    const grandtotalRef = useRef()
    const paymentmethodeRef = useRef()
    const {
    cartTotal,
    items,
    quantity
  } = useCart();
    const submitForm = event => {
        event.preventDefault()
        fname = fnameRef.current;
        lname = lnameRef.current;
        company = companyRef.current;
        country = countryRef.current;
        city = cityRef.current;
        region = regionRef.current;        
        phone = phoneRef.current;        
        note = noteRef.current;
        paymentmethode= paymentmethodeRef.current
        fetch(`http://127.0.0.1:8000/api/invoices`, {
            method: 'POST',
            body: JSON.stringify({
                client_fname:fname,
                client_lname:lname,
                compony:company,
                client_phone:phone,
                client_country:"المملكة العربية السعودية",
                client_city:city,
                client_region:region,
                note:note,
                payment_methode:paymentmethode,
                tax:10.50,
                grandtotal:grandtotal,
                subtotal:grandtotal-10.50
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
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
      <ProductsHeroSecion image="/cartbg.jpg" title="نسعد في خدمتك دائماً..."/>

<div className="mx-auto shadow-xl w-4/5" style={{"margin-top": "-100px"}}>
  <div class="flex flex-col w-full mx-auto md:flex-row py-4 px-6">
    <div class="lg:w-3/5 w-full">
        <h2 class="mb-4 font-bold md:text-xl text-heading py-4 border-b border-gray-300">تفاصيل الفاتورة </h2>
        <form onSubmit={submitForm} class="w-full mx-auto" method="post" action>
            <div class="space-x-0 lg:flex lg:space-x-4">
            <div class="w-full lg:w-1/2">
                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">الاسم الأول *
                </label>
                <input name="firstName" type="text" ref={fnameRef}           
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                focus:ring-1 focus:ring-orange-700"required/>
            </div>
            <div class="w-full lg:w-1/2 ">
                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">الاسم الأخير *
                </label>
                <input name="Last Name" type="text" ref={lnameRef}
                className="w-full px-4 py-2 lg:mr-1 mr-0 mt-2 border rounded-md focus:outline-none 
                focus:ring-1 focus:ring-orange-700"required/>
            </div>
            </div>    
            <div class="mt-4 w-full">
                <label for="company"
                class="block mb-3 text-sm font-semibold text-gray-500">
                اسم الشركة (اختياري)</label>
                <input name="company" type="text" ref={companyRef}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                focus:ring-1 focus:ring-orange-700"required/>                                
            </div>
            <div class="mt-4 w-full">
            <label class="block mb-3 text-sm font-semibold text-gray-500">
            الدولة / المنطقة *</label>                                    
            <label class="block mb-3 text-sm font-bold text-gray-500" ref={countryRef}>
            المملكة العربية السعودية</label>
            </div>
            <div class="mt-4 w-full">
            <label for="City"
            class="block mb-3 text-sm font-semibold text-gray-500">
            المدينة *</label>
            <input name="city" type="text" ref={cityRef}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
            focus:ring-1 focus:ring-orange-700"required/>
            </div>
            <div class="mt-4 w-full">
            <label for="region"
            class="block mb-3 text-sm font-semibold text-gray-500">
            المنطقة *</label>
            <input name="region" type="text" ref={regionRef}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
            focus:ring-1 focus:ring-orange-700"required/>                            
            </div>
            <div class="w-full mt-4">
            <label for="phone" class="block mb-3 text-sm font-semibold text-gray-500">
            الهاتف *</label>
            <input name="phone" type="text" ref={phoneRef}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
            focus:ring-1 focus:ring-orange-700"required/>  
            </div>
            <div class="w-full mt-4 relative pt-3 xl:pt-6">
                <h2 class="mb-4 font-bold md:text-xl text-heading ">تفاصيل الفاتورة
                </h2>
                <label for="note"
                class="block mb-3 text-sm font-semibold text-gray-500">ملاحظات الطلب (اختياري)
                </label><textarea name="note" ref={noteRef}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                focus:ring-1 focus:ring-orange-700"
                rows="4" placeholder="Notes for delivery"></textarea>
            </div>
        </form>
    </div>
    <div class="w-full h-full mr-0 lg:mr-12 lg:w-2/5 border border-gray-300 p-4">
        <div class="pt-12 md:pt-0 2xl:ps-4">
            <h2 class="text-xl font-bold">طلبك</h2>
            <div class="mt-8 flex justify-between items-center py-4 border-b border-gray-300">
                <h2 class="font-Roboto text-xl font-bold">المنتج</h2>
                <h2 class="font-Roboto text-xl font-bold">المجموع</h2>
            </div>                        
            {items.map((item) => (      
            <div class="flex justify-between items-center py-4 font-semibold border-b border-gray-300">
                <div><h2>{item.title}</h2><p>{quantity}</p></div> 
                <div><p>{item.price}</p></div>
            </div> 
            ))}                     
            </div>
            <div class="flex items-center justify-between w-full py-4 font-Roboto font-bold border-b border-gray-300">
                <h2>ضريبة القيمة المضافة</h2><p ref={taxRef}>10.50</p></div>
            <div class="flex items-center justify-between w-full py-4 font-Roboto font-bold border-b border-gray-300">
                <h2>الإجمالي</h2><p ref={grandtotalRef}>{cartTotal + 10.50}</p></div>
            <div class="w-full py-4 font-Roboto font-bold border-b border-gray-300">
                <h2 ref={paymentmethodeRef}>الدفع نقدًا عند الإستلام</h2>
                <p class="ml-2">الدفع عند التسليم مباشرة.</p></div>
                <p className="font-Roboto mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                &nbsp; <span className="text-sm text-orange-500 hover:underline">سياسة الخصوصية.</span></p>
            <div class="mt-4">
                <Link href="/checkout" className="flex items-center justify-center rounded-md border border-transparent 
                bg-orange-500 px-6 py-3 text-center font-medium text-white shadow-sm hover:bg-orange-700">
                الرجاء متابعة الطلب عبر النقر على زر الواتساب في الصفحة التالية         
                </Link>
            </div>
    </div>
  </div>
</div>
       <Footer />
    </>
    )
}
export default CheckoutPage;
