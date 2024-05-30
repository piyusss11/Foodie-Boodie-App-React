import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { ThemeContext, ThemeProvider } from "./context/themeContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  // console.log(<Body/>);
  useEffect(() => {
    const data = {
      name: "Piyush",
    };
    setUserName(data.name);
  }, []);
  const [themeMode,setThemeMode] =useState("light")
 

    if(themeMode==="light"){
      document.querySelector("body").classList.add("bg-white")
      console.log(themeMode);
      
    }if(themeMode==="dark"){
      document.querySelector("body").classList.add("dark:bg-black")
      console.log(themeMode);
      
    }

  const lightTheme = ()=>{
    setThemeMode("light")
    
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
    
  }
  useEffect(()=>{
    const lighAndDark = document.querySelector("html").classList
    lighAndDark.remove("light","dark")
    lighAndDark.add(themeMode)
    // document.querySelector("body").classList.remove("bg-white,bg-black")
  },[themeMode])


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>

          <Header />
          </ThemeProvider >
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const About = lazy(() => import("./pages/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <h1>
                <Shimmer />
              </h1>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <MenuPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
