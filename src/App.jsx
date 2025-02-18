import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path:"/update/:id",
      element:<Update/>
    }
  ]);
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
