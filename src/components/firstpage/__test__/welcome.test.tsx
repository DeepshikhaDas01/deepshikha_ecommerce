import React from "react";
import Welcome from "../welcome";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";


describe("Welcome Page Component testing", () => {
  const NewWelcome: React.FC = () => {
    return (
      <RecoilRoot>
        <BrowserRouter>
        <Welcome />
        </BrowserRouter>
      </RecoilRoot>
    );
  };
  afterEach(() => {
    cleanup();
  });
  test("should have Welcome Message", () => {
    render(<NewWelcome />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
  test("should have Welcome Message", () => {
    render(<NewWelcome />);

    expect(
      screen.getByText(/Your Own/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Shopping/i)
      ).toBeInTheDocument();
    expect(
      screen.getByText(/website/i)
    ).toBeInTheDocument();
      
    expect(
        screen.getByText(/Lifestyle/i)
    ).toBeInTheDocument();
  });
  

  test('button should work when clicked', ()=>{
 render(<NewWelcome />)
 const check=screen.getByRole('button', {name: "Click Here"});

 fireEvent.click(check);

})

test('home button should display', ()=>{
  render(<NewWelcome />)
  expect( screen.getByText(/home/i)).toBeInTheDocument();
})

test('about button should display', ()=>{
  render(<NewWelcome />)
  expect( screen.getByText(/about/i)).toBeInTheDocument();
})

test('contact us button should display', ()=>{
  render(<NewWelcome />)
  expect( screen.getByText(/contact us/i)).toBeInTheDocument();
})
});


