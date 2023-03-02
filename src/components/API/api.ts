import Product from "../Product/Product";
export async function ProductAPIcall(){
    const Response = await fetch('https://fakestoreapi.com/products');
    return await Response.json(); 
}