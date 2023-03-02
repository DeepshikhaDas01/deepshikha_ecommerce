import React from "react";
import Products from "../products";
import {screen, render, waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import * as api from '../../API/api';
import {data} from '../../data/data';

global.fetch = jest.fn(() =>

  Promise.resolve({

    json: () => Promise.resolve(data),

  })

) as jest.Mock;
describe("products component is being tested",()=>{
    const Prod_test: React.FC =()=>{
        return(
            <RecoilRoot>
              
                 <Products/> 
              
            
            </RecoilRoot>
        );
    };

    // test("all products text shoild be visible", ()=> {
    //      render(<Prod_test />)
    //    expect(screen.getByText('/all products/i')).toBeInTheDocument();
    // });

//    test("testing async funtion",async()=>{
//     render(<Prod_test />)
//     const = await Error()
//     expect (Prod_test).toBe("Something went wrong...")
    
//    })


  test("should have the text All Products", async()=>{
    render(<Prod_test/>);
    
    const prodText = await waitFor(()=>screen.getByText(/All products/i));
  })   
});















