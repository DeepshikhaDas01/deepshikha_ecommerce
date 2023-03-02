import React, { FC, } from 'react'
import { useRecoilState } from 'recoil';
import { cartItems } from '../../state/RecoilState';
import { Product as ProductType } from '../../types';
import Modal_prods from './Modal_prods';
import { modal } from '../../state/Modal_prods';




export type ProductProps = {
  product: ProductType
}

const Product: FC<ProductProps> = ({ product }) => {
  const [cartProducts, setCartProducts] = useRecoilState(cartItems);
  const [showModal_prods, setModal_prods]=useRecoilState(modal);
  const onAddToCartClicked = () => {
    const cartProduct = cartProducts.find(cartProduct => cartProduct.id === product.id)
    if (cartProduct) {
      const updatedCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            count: cartProduct.count + 1
          }
        }
        return cartProduct
      })

      setCartProducts(updatedCartProducts)
    setModal_prods(true);
      return
    }
    
    setCartProducts([...cartProducts, { ...product, count: 1 }])
   setModal_prods(true);
  }


  return (
  <>
    <div className="card-container-div">

      <div className="card-img">
        <img src={product.image} alt={product.title} className="card-img" />
      </div>
      <div className='card-detail-div'>
        <p className="card-para">Price: Rs. {product.price}</p>
        <button className="card-btn-cart" onClick={onAddToCartClicked}>
          Add to Cart
        </button>
      
      </div>
    </div>
    {showModal_prods ? <Modal_prods /> : null}
    </>
  )
}

export default Product
