import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItems, cartTotal } from "../../state/RecoilState";
import { CartProduct } from "../../types";
import Modal from "../Modal";


function Cart() {
  const [prods, setProds] = useRecoilState(cartItems);
  const [showModal, setShowModal] = useState(false);
  const totalAmount = useRecoilValue(cartTotal);

  const increaseProduct = (product: CartProduct) => {
    const updatedProducts = prods.map(prod => {
      if (prod.id === product.id) {
        return {
          ...prod,
          count: prod.count + 1
        }
      }

      return prod
    })

    setProds(updatedProducts)
  }

  const decreaseProduct =(product: CartProduct) =>{
    if (product.count > 1) {
      const updatedProducts = prods.map(prod => {
        if (prod.id === product.id) {
          return {
            ...prod,
            count: prod.count - 1
          }
        }

        return prod
      })
      setProds(updatedProducts)
      return
    } else {
      removeProduct(product)
    }

  }

  const removeProduct = (product: CartProduct) => {

    const updatedProducts = prods.filter(prod => prod.id !== product.id)
    
    setProds(updatedProducts)
    return;
  }

  

  return (
    <div className="cart-main-container">

      <h1 className="cart-main-heading">Cart Items total: {prods.length}</h1>
      {prods.length === 0 ? (
        <div className="cart-empty-div">
          Currently there is no item in cart
        </div>
      ) : (
        <>
          {prods.map((item, index) => (
            <div className="cart-items-div" key={item.id}>
              <div className="img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
              </div>
              <div>
                <div className="cart-item-info-div">
                  <p>
                    <span className="normal">Product Name:</span>
                    {item.title}
                  </p>
                  <p>
                    <span className="normal">Product Category:</span>
                    {item.category}
                  </p>
                  <p>
                    <span className="normal">Product Price:</span>
                    {item.price}
                  </p>
                  <p>
                    <span className="normal">Product Count:</span>
                    {item.count}
                    <span style={{margin: "0 2px", cursor: "pointer"}} onClick={() => {
                      increaseProduct(item)
                    }}>➕</span>
                    <span style={{margin: "0 2px", cursor: "pointer"}} onClick={() => {
                      decreaseProduct(item)
                      
                    }}>➖</span>
                  </p>
                </div>
                <div className="cart-delete-item-div"  onClick={() => removeProduct(item)}>
                  <button title="delete">
                    Delete
                  </button>
                </div>
              </div>

            </div>
          ))}
          <p className="cart-total">Total Amount: {totalAmount}</p>

          <button title="Checkout" className="cart-checkout-btn" onClick={()=>setShowModal(true)}>
            <span className="inline-flex">
              Checkout
            </span>
          </button>
            {showModal && <Modal />}
        </>
      )}
    </div>

  );
}


export default Cart;

