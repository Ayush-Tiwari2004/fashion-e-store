import ErrorPage from "./commonComponents/ErrorPage";
import TrendHiveHomePage from "./components/homecomonents/TrendHiveHomePage";
import { GetShoesData } from "./components/productpages/ViewAllproduct/GetShoesData";
import Shoes from "./components/productpages/ViewAllproduct/Shoes";
import ShoesDetails from "./components/productpages/ViewAllproduct/ShoesDetails";
import { ViewAllProduct } from "./components/productpages/ViewAllproduct/ViewAllProduct";
import AppLayout from "./pages/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <TrendHiveHomePage />},
        {path: "man/viewallproduct", element: <ViewAllProduct />},
        {path: "man/shoes", element: <Shoes />},
        {path: "man/shoes/:id", element: <ShoesDetails />, loader: GetShoesData}
      ]
    }
  ]);
  return <RouterProvider router={router}/>;
}

export default App;
