import { useContext } from 'react';
import { Fragment } from 'react';

import Head from 'next/head';
import Header from '../../components/layout/main-header'
import Footer from '../../components/layout/footer'
import ProductsHeroSecion from '../../components/products/products-hero-section'
import ProductsCategoriesNav from '../../components/products/products-categories-nav'
import LangSwitch from '../../components/layout/langswitch'

import CartContext from '../../store/cart-context';
import ProductsList from '../../components/products/products-list';

function CartPage() {
  const productsCtx = useContext(CartContext);

  let content;

  if (productsCtx.totalProductsinCart === 0) {
    content = 
    <Fragment>
    <Head>
    <title>My Cart</title>
    <meta
      name='description'
      content=''
    />
  </Head>
  <LangSwitch />
  <Header />
  <ProductsHeroSecion />
  <ProductsCategoriesNav categories={categories}/>
  <p>You don't have any products yet. Start adding some?</p>;
  <Footer />
</Fragment>
    } else {
    content = 
    <Fragment>
    <Head>
        <title>My Cart</title>
        <meta
          name='description'
          content=''
        />
      </Head>
      <LangSwitch />
      <Header />
      <ProductsHeroSecion />

      <ProductsCategoriesNav categories={categories}/>
      <ProductsList products={productsCtx.cartproducts} />;

      <Footer />
    </Fragment>
  }

  return (
    <section>
      <h1>My Products</h1>
      {content}
    </section>
  );
}

export default CartPage;