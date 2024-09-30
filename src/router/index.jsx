import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import OrderManagement from "../pages/OrderManagement";
import Brand from "../pages/Brand";
import AddProduct from "../pages/AddProduct";
import ProductList from "../pages/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/order-management", element: <OrderManagement /> },
      { path: "/brand", element: <Brand /> },
      { path: "/add-product", element: <AddProduct /> },
      { path: "/product-list", element: <ProductList /> },
    ],
  },
]);

export default router;
