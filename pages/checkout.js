import {useRouter} from 'next/router'
import { useCart } from "react-use-cart";
import { useRef,useState } from 'react'
import axios from '../lib/axios';

import Head from 'next/head';
import Footer from '../components/layout/footer'
import ProductsHeroSecion from '../components/products/products-hero-section'

function CheckoutPage() {
    const router = useRouter()
    const [route, setRoute] = useState('')
    console.log(route)
    const fnameRef = useRef()
    const lnameRef = useRef()
    const companyRef = useRef()
    const cityRef = useRef()
    const regionRef = useRef()
    const phoneRef = useRef()
    const noteRef = useRef()
    const {
    cartTotal,
    items,
  } = useCart();
    const country = "المملكة العربية السعودية";
    const tax = 10.50;
    const subtotal = cartTotal-tax;        
    const grandtotal = cartTotal;
    const paymentmethode = 'الدفع عند الإستلام';    

    const submitForm = async event => {
    
        event.preventDefault()
        const fname = fnameRef.current.value;
        const lname = lnameRef.current.value;
        const company = companyRef.current.value;
        const city = cityRef.current.value;
        const region = regionRef.current.value;        
        const phone = phoneRef.current.value;        
        const note = noteRef.current.value;

        const invoice = { 
            client_fname:fname,
            client_lname:lname,
            client_company:company,
            client_phone:phone,
            client_country:country,
            client_city:city,
            client_region:region,
            note:note,
            payment_methode:paymentmethode,
            tax:tax,
            subtotal:subtotal,
            grandtotal:grandtotal
        };
        axios.post('http://localhost:8000/api/invoices', invoice)
        .then((response) => {console.log(response) 
            router.push({
                pathname: "/my-invoice",
                state: { clickedFromHome: true },
                query: response.data
              });
            })
        .catch((error) => console.log(error));
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
      <ProductsHeroSecion image="/cartbg.jpg" title="نسعد في خدمتك دائماً..."/>

<div className="mx-auto shadow-xl w-4/5" style={{"margin-top": "-100px"}}>
  <form onSubmit={submitForm} className="flex flex-col w-full mx-auto md:flex-row py-4 px-6">
    <div className="lg:w-3/5 w-full">
        <h2 className="mb-4 font-bold md:text-xl text-heading py-4 border-b border-gray-300">تفاصيل الفاتورة </h2>
        <div className="w-full mx-auto" method="post" action>
            <div className="space-x-0 lg:flex lg:space-x-4">
            <div className="w-full lg:w-1/2 mt-4">
                <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">الاسم الأول *
                </label>
                <input name="firstName" type="text" ref={fnameRef}           
                className="w-full px-4 py-2 border rounded-md focus:outline-none 
                focus:ring-1 focus:ring-orange-700"required/>
            </div>
            <div className="w-full lg:w-1/2 mt-4">
                <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">الاسم الأخير *
                </label>
                <input name="Last Name" type="text" ref={lnameRef}
                className="w-full px-4 py-2 lg:mr-1 mr-0 border rounded-md focus:outline-none 
                focus:ring-1 focus:ring-orange-700"required/>
            </div>
            </div>    
            <div className="mt-4 w-full">
                <label for="company"
                className="block mb-3 text-sm font-semibold text-gray-500">
                اسم الشركة (اختياري)</label>
                <input name="company" type="text" ref={companyRef}
                className="w-full px-4 py-2 border rounded-md focus:outline-none 
                focus:ring-1 focus:ring-orange-700"required/>                                
            </div>
            <div className="mt-4 w-full">
            <label className="block mb-3 text-sm font-semibold text-gray-500">
            الدولة / المنطقة *</label>                                    
            <label className="block mb-3 text-sm font-bold text-gray-500">
            المملكة العربية السعودية</label>
            </div>
            <div className="mt-4 w-full">
            <label for="City"
            className="block mb-3 text-sm font-semibold text-gray-500">
            المدينة *</label>
            <input name="city" type="text" ref={cityRef}
            className="w-full px-4 py-2 border rounded-md focus:outline-none 
            focus:ring-1 focus:ring-orange-700"required/>
            </div>
            <div className="mt-4 w-full">
            <label for="region"
            className="block mb-3 text-sm font-semibold text-gray-500">
            المنطقة *</label>
            <input name="region" type="text" ref={regionRef}
            className="w-full px-4 py-2 border rounded-md focus:outline-none 
            focus:ring-1 focus:ring-orange-700"required/>                            
            </div>
            <div className="w-full mt-4">
            <label for="phone" className="block mb-3 text-sm font-semibold text-gray-500">
            الهاتف *</label>
            <input name="phone" type="phone" ref={phoneRef}
            className="w-full px-4 py-2 border rounded-md focus:outline-none 
            focus:ring-1 focus:ring-orange-700"required/>  
            </div>
            <div className="w-full mt-4 relative pt-3 xl:pt-6">
                <h2 className="mb-4 font-bold md:text-xl text-heading ">تفاصيل الفاتورة
                </h2>
                <label for="note"
                className="block mb-3 text-sm font-semibold text-gray-500">ملاحظات الطلب (اختياري)
                </label><textarea name="note" ref={noteRef}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                focus:ring-1 focus:ring-orange-700"
                rows="4" placeholder="Notes for delivery"></textarea>
            </div>
        </div>
    </div>
    <div className="w-full h-full mr-0 lg:mr-12 lg:w-2/5 border border-gray-300 p-4">
        <div className="pt-12 md:pt-0 2xl:ps-4">
            <h2 className="text-xl font-bold">طلبك</h2>
            <div className="mt-8 flex justify-between items-center py-4 border-b border-gray-300">
                <h2 className="font-Roboto text-xl font-bold">المنتج</h2>
                <h2 className="font-Roboto text-xl font-bold">المجموع</h2>
            </div>                        
            {items.map((item) => (      
            <div key={item.id}className="flex justify-between items-center py-4 font-semibold border-b border-gray-300">
                <div className="flex justify-between items-center"><h2>{item.title}</h2>&nbsp;&nbsp;<p>{item.quantity}x</p></div> 
                <div><p>{item.price}</p></div>
            </div> 
            ))}                     
            </div>
            <div className="flex items-center justify-between w-full py-4 font-Roboto font-bold border-b border-gray-300">
                <h2>ضريبة القيمة المضافة</h2><p>10.50</p></div>
            <div className="flex items-center justify-between w-full py-4 font-Roboto font-bold border-b border-gray-300">
                <h2>الإجمالي</h2><p>{cartTotal + 10.50}</p></div>
            <div className="w-full py-4 font-Roboto font-bold border-b border-gray-300">
                <h2>الدفع نقدًا عند الإستلام</h2>
                <p className="ml-2">الدفع عند التسليم مباشرة.</p></div>
                <p className="font-Roboto mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                &nbsp; <span className="text-sm text-orange-500 hover:underline">سياسة الخصوصية.</span></p>
            <div className="mt-4">
                <input type="submit" value="الرجاء متابعة الطلب عبر النقر على زر الواتساب في الصفحة التالية"
                className="cursor-pointer w-full rounded-md border border-transparent whitespace-normal	
                bg-orange-500 px-6 py-3 text-center font-medium text-white shadow-sm hover:bg-orange-700"/>
            </div>
    </div>
  </form>
</div>
       <Footer />
    </>
    )
}
export default CheckoutPage;
