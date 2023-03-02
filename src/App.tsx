import Welcome from './components/firstpage/welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products/products';
import { RecoilRoot } from 'recoil';
import Cart from './components/Cart/cart';

export type CartItemType = {
  id: number;
  category:string;
  description: string;
  image: string;
  price: number;
  title: string;
}

function App() {
   
  return (
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
     <Route path='/' element= {<Welcome />} />
     <Route path='/products' element= {<Products />} />
     <Route path='/cart' element= {<Cart />} />
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}
export default App;
