import Product from "./product"

export default function ProductsList(props) {
    const { products } = props;

  return (
    <div className="my-10 bg-white border border-black shadow-xl px-6 py-4 relative z-1 w-3/4 h-auto mx-auto rounded-lg">
      <div className="mx-auto mb-4 flex flex-wrap justify-between items-center">
        <a href="#"className="text-center hover:text-orange-500">جميع المنتجات</a>
        <a href="#"className="text-center hover:text-orange-500">1 كغ</a>
        <a href="#"className="text-center hover:text-orange-500">5 كغ</a>
        <a href="#"className="text-center hover:text-orange-500">سابوري</a>
        <a href="#"className="text-center hover:text-orange-500">شوكولاته</a>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-center items-center">
          {Array.isArray(products)&&products.map((product) => (
            <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
