import ErrorPage from "./commonComponents/ErrorPage";
import TrendHiveHomePage from "./components/homecomonents/TrendHiveHomePage";
import Brand from "./components/productpages/brandProducts/Brand";
import Gaming from "./components/productpages/gamingProducts/Gaming";
import Shirt from "./components/productpages/shirts/Shirt";
import Shoes from "./components/productpages/ShoesData/Shoes";
import ShoesDetails from "./components/productpages/ShoesData/ShoesDetails";
import Tshirt from "./components/productpages/t-shirt/Tshirt";
import { GetBrandsData, GetGamingToolsData, GetShirtData, GetShoesData, GetTshirtData } from "./components/productpages/ViewAllproduct/GetAllProductsData";
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
        {path: "man/shoes/:id", element: <ShoesDetails />, loader: GetShoesData},
        {path: "man/tshirt", element: <Tshirt />},
        {path: "man/tshirt/:id", element: <ShoesDetails />, loader: GetTshirtData},
        {path: "man/shirt", element: <Shirt />},
        {path: "man/shirt/:id", element: <ShoesDetails />, loader: GetShirtData},
        {path: "man/brand", element: <Brand />},
        {path: "man/brand/:id", element: <ShoesDetails />, loader: GetBrandsData},
        {path: "man/gaming", element: <Gaming />},
        {path: "man/gaming/:id", element: <ShoesDetails />, loader: GetGamingToolsData},
      ]
    }     
  ]);
  return <RouterProvider router={router}/>;
}

export default App;
