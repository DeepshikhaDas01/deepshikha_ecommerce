import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import carticon from "../firstpage/images/basket-cart-icon-27.png";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AllProducts } from "../../state/RecoilState";
import { ProductAPIcall } from "../API/api";
function Products() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setProducts] = useRecoilState(AllProducts);
  
  useEffect(()=>{
   ProductAPIcall()
    .then((result)=>{
      setLoading(false);
      setProducts(result);
     },//(error)=>{
    //   setLoading(false);
    //   setError(true);
    // }
    )
  });
  
 
  if (error) return <div className="error">Something went wrong...</div>;
  if (loading) return <div className="data-loading">Data is Loading... </div>;

  return (
    <div className="product-main-div">
      <h2 className="product-heading">All Products</h2>
      <hr />
      <div className="product-card-container">
        {data.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className="carticon">
        <Link to='/cart'>
          <button className="cart-icon-button">
            <img src={carticon} height='45' width='45' alt='ecomm carticon' className="carticon" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Products;
