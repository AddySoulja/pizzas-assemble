import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Checkout from "./pages/checkout/Checkout";
import MenuItems from "./pages/menu/MenuItems";
import CustomizePizza from "./pages/customize/CustomizePizza";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Dashboard />} />
      <Route path="/menu" element={<MenuItems />} />
      <Route path="/customize" element={<CustomizePizza />} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
