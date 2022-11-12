import Product from "./product"
export default function ProductsList(props) {
    const { products } = props;

  return (
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
  )
}
