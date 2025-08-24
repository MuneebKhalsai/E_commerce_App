import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Service.jsx'
import Products from './pages/Products.jsx'
import SingleProducts from './pages/SingleProduct.jsx'
import store from './config/redux/store/store'
import Cart from './Cart'
import { Provider } from 'react-redux';
const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: "cart",
        element: <Cart/>
        },
      {
        path: 'service',
        element: <Services/>
      },
      {
      path: 'products',
      element: <Products/>      
      },
      {
      path:'product/:id',
      element: <SingleProducts/>
    },
    
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)