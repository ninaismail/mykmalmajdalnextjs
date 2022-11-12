import { useEffect, useState } from 'react';

import ProductsList from '../products/products-list';

function Products(props) {
  const { categoryId } = props;

  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/categories/${categoryId}/product`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          console.log(data)
        });
  },[]);

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default Products;