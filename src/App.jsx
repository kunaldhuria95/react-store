import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import "./styles/global.css"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";



function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />

      </div>
    )
  }



  const router = createBrowserRouter([
    {
      path: "/react-store",
      element: <Layout />,
      children: [
        {
          path: "/react-store",
          element: <Home />
        },
        {
          path: "/react-store/product/:id",
          element: <Product />,
        },
      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
