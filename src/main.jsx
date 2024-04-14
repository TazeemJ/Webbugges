import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./screen/Home/Home.jsx";
import Blog from "./screen/BLog/Blog";
import ContentUsScreen from "./screen/ContentUsScreen/ContentUsScreen.jsx";
import About from "./screen/About/About.jsx";
import Jobs from "./screen/Jobs/Jobs.jsx";
import Portfolio from "./screen/Portfolio/Portfolio.jsx";
import Product from "./screen/Product/Product.jsx";
import Services from "./screen/Services/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/product", element: <Product /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/about-us/", element: <About /> },
      { path: "/Blog", element: <Blog /> },
      { path: "/content-us", element: <ContentUsScreen /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
