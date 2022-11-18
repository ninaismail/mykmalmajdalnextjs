import axios from '../../lib/axios';

import Head from 'next/head';
import ProductDetails from '../../components/products/product-details';
import Header from '../../components/layout/main-header'
import Footer from '../../components/layout/footer'
import ProductsHeroSecion from '../../components/products/products-hero-section'
import ProductsCategoriesNav from '../../components/products/products-categories-nav'
import LangSwitch from '../../components/layout/langswitch'

function ProductDetailPage(props) {
  const categories = props.allcategories;
  const product = props.selectedProduct;

  
  if (!product) {
    return (    
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
        <Head>
        <title>{product.title}</title>
        <meta
          name='description'
          content={product.description}
        />
      </Head>
      <LangSwitch />
      <Header />
      <ProductsHeroSecion />

      <ProductsCategoriesNav categories={categories}/>
         
      <ProductDetails
         key={product.id}
         id={product.id}
         title={product.title}
         description={product.description}
         price={product.price}
         image={product.image}   
         image2={product.image2} 
         image3={product.image3} 
         image4={product.image4} 
         category_id={product.category_id}
       />
      <Footer />
    </div>
  );
}
export async function getStaticProps(context) {
    const categories = await axios.get("http://127.0.0.1:8000/api/categories");

    const productId = context.params.productid;
    
    const product = await axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
    return {
      props: {
        allcategories: categories.data,
        selectedProduct: product.data
      },
      revalidate: 30
    };
  }
  
  export async function getStaticPaths() {
    const products =  await axios.get("http://127.0.0.1:8000/api/products");
    const pathsWithParams =  products.data.map((product) => ({
      params: { productid: product.id.toString()},
    }))
  
    return {
      paths: pathsWithParams,
      fallback: false
    };
  }

export default ProductDetailPage;