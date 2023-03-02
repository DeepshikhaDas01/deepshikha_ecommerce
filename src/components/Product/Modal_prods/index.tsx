import React from 'react';
import tick from './check_circle_FILL0_wght400_GRAD0_opsz48.png'
import { useSetRecoilState } from 'recoil';
import "./style.css"
import { modal } from '../../../state/Modal_prods';

const Modal_prods = () => {
    const setModal_prods = useSetRecoilState(modal);
 const toggleModal_prods = () => {
   return (event: React.MouseEvent<HTMLElement>) => {
      setModal_prods(false);
      event.preventDefault();
    };
  };
  return (
    <div className='background'>
        <div className="modalWindow">
        <div className='title'>Item added to cart<span><img src = {tick}/></span></div>
        <button className='okayButton' onClick={toggleModal_prods()}>Okay</button>
    </div></div>
    
  )
}

export default Modal_prods;
