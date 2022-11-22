import { useEffect, useState } from 'react';

import Product from '../products/product';

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
  },[categoryId]);

  return ( 
      <Product products={products}/>
  );
}

export default Products;
