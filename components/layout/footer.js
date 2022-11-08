import {FaInstagram,FaYoutube,FaFacebook,FaWhatsapp,FaTwitter} from 'react-icons/fa'
function Footer() {
    return ( 
<footer>
    <div className="flex flex-wrap md:flex-nowrap gap-8 py-8 px-6">
        <div className="md:w-1/3">
            <h2 className="font=RobotoSlab mb-6 text-orange-500 md:text-4xl text-2xl md:w-1/2 pb-4 border-b-2 border-orange-500">
            روابط سريعة
            </h2>
            <ul className='font=Roboto'>
                <li className="mb-4 md:text-2xl text-xl">
                    <a href="#" className="hover:underline">الصفحة الرئيسية</a>
                </li>
                <li className="mb-4 md:text-2xl text-xl">
                    <a href="#" className="hover:underline">من نحن</a>
                </li>
                <li className="mb-4 md:text-2xl text-xl">
                    <a href="#" className="hover:underline">الأصناف</a>
                </li>
                <li className="mb-4 md:text-2xl text-xl">
                    <a href="#" className="hover:underline">إبداعات منتجاتنا</a>
                </li>
                <li className="mb-4 md:text-2xl text-xl">
                    <a href="#" className="hover:underline">تواصل معنا</a>
                </li>
            </ul>
        </div>
        <div className="md:w-1/3">
            <h2 className="font=RobotoSlab mb-6 text-orange-500 md:text-4xl text-2xl md:w-1/2 pb-4 border-b-2 border-orange-500">
            تواصل معنا
            </h2>
            <ul className='font=Roboto'>
                <li className="mb-4 md:text-2xl text-xl">
                    <a href="#" className="hover:underline">يسعدنا تلقي استفساراتكم و اقتراحاتكم
                    على الرقم : 0593337383</a>
                </li>
                <li className="mb-4 md:text-2xl text-xl">
                    <a href="#" className="hover:underline">info@km-almajdal.com</a>
                </li>
                <li className="mb-4 flex">
                <a href="#"className='border rounded-full p-3'>
                    <FaTwitter fontSize="1.4em" />
                    <span className="sr-only">Twitter page</span>
                </a>                
                <a href="#"className='border rounded-full p-3'>
                    <FaYoutube fontSize="1.4em" />
                    <span className="sr-only">Youtube page</span>
                </a>
                <a href="#"className='border rounded-full p-3'>
                    <FaFacebook fontSize="1.4em" />
                    <span className="sr-only">Facebook page</span>
                </a>     
                <a href="#"className='border rounded-full p-3'>
                    <FaInstagram fontSize="1.4em" />
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="#"className='border rounded-full p-3'>
                    <FaWhatsapp fontSize="1.4em" />
                    <span className="sr-only">Whatsapp page</span>
                </a>             
               </li>
            </ul>
        </div>   
        <div className="md:w-1/3">
        <h2 className="font=RobotoSlab mb-6 text-orange-500 md:text-4xl text-2xl md:w-1/2 pb-4 border-b-2 border-orange-500">
            موقعنا
            </h2>
            <div id="map" className="mb-4 md:text-3xl text-2xl">
\           </div>
        </div>             
    </div>
    <div dir="ltr"className="font=Roboto text-right py-6 px-4 md:flex md:items-center md:justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © Copyrights 2022. <span className='font-bold'>Komet Al Majdal</span> All Rights Reserved. 
        </div>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            Powered By<a href="https://flowbite.com/">DAS360</a>
        </div>
    </div>
</footer>

    );
  }
  
  export default Footer;

