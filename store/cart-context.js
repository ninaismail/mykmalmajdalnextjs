import { createContext, useState } from 'react';

const CartContext = createContext({
  cartproducts: [],
  totalProductsinCart: 0,
  addProducttoCart: (addedProduct) => {},
  removeProductfromCart: (productId) => {},
  itemIsAddedtoCart: (productId) => {}
});

export function ProductsinCartContextProvider(props) {
const [userProducts, setUserProducts] = useState([]);

  function addProductHandler(addedProduct) {
    setUserProducts((prevUserProducts) => {
      return prevUserProducts.concat(addedProduct);
    });
  }

  function removeProductHandler(productId) {
    setUserProducts(prevUserProducts => {
      return prevUserProducts.filter(product=> product.id !== productId);
    });
  }

  function itemIsAddedtoCartHandler(productId) {
    return userProducts.some(product=> product.id === productId);
  }

  const context = {
    cartproducts: userProducts,
    totalProductsinCart: userProducts.length,
    addProducttoCart: addProductHandler,
    removeProductfromCart: removeProductHandler,
    itemIsAddedtoCart: itemIsAddedtoCartHandler
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContext;
