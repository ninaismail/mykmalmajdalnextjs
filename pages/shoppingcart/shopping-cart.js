import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import ProductsList from '../../components/products/products-list';

function CartPage() {
  const productsCtx = useContext(CartContext);

  let content;

  if (productsCtx.totalProductsinCart === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <ProductsList products={productsCtx.cartproducts} />;
  }

  return (
    <section>
      <h1>My Products</h1>
      {content}
    </section>
  );
}

export default CartPage;