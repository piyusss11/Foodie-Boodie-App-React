import "@testing-library/jest-dom";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appstore from "../../utils/appStore";
it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button",{name:"Login"});
  expect(loginBtn).toBeInTheDocument();
});
it("should render header component with cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("0");
  expect(cartItems).toBeInTheDocument();
});
it("should change login button to logout onclick ", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbtn = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginbtn)
  const logoutbtn = screen.getByRole("button",{name:"Logout"});
  expect(logoutbtn).toBeInTheDocument();
});
