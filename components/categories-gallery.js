import Image from 'next/image'

function CategoriesGallery() {
  return (
<div id="products" dir="rtl"className="flex flex-wrap justify-center mt-6">
    <div className="lg:flex-1 w-full h-full md:w-1/2 lg:w-1/3 mx-6">
      <Image src="/nutella-maison.jpg" width="473" height="330" alt="Butella Maison" className="bg-gray-700 mb-6 mx-auto w-full"/>
      <Image src="/chocalatechip-cookies.jpg" width="473" height="703" alt="" className="bg-gray-700 mx-auto w-full"/>
     </div>    
     <div className="lg:flex-1 w-full h-full md:w-1/2 lg:w-1/3 mx-6">
      <h1 className="font-RobotoSlab mb-6 md:text-6xl text-4xl">إبداعات منتجاتنا</h1> 
      <Image src="/brownies.jpg" width="473" height="703" alt="Brownies" className="bg-gray-700 mb-6 mx-auto w-full"/>
      <Image src="/lotus-cupcake.jpg" width="473" height="330" alt="Lotus Cupcake" className="bg-gray-700 mb-6 mx-auto w-full"/>
      <button className="font-Roboto block p-3 mx-auto w-full text-xl
      bg-gray-100 hover:bg-white border rounded-full border-black-500 
      focus:ring-black-500 focus:border-black-500">تعرف على جميع المنتجات</button>
    </div>
    <div className="lg:flex-1 w-full h-full lg:w-1/3 mx-6">
      <Image src="/crepe.jpg" width="473" height="330" alt="Crepe" className="bg-gray-700 mb-6 mx-auto w-full"/>
      <Image src="/recette-puree-amande.jpg" width="473" height="703" alt="Recette Puree Amande" className="bg-gray-700 mx-auto w-full"/>
      </div>
</div>

  );
}

export default CategoriesGallery;