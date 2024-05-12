import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const AppLayout = () => {
  // console.log(<Body/>);

  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contactus",
    element: <Contact />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
