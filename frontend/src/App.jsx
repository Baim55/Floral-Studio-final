import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Admin from './pages/admin/Admin';
import Basket from './pages/basket/Basket';
import NotFoundPage from './pages/NotFoundPage';
import Detail from './pages/detail/Detail';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contacts",
        element:<Contacts/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/pricing",
        element:<Pricing/>
      },
      {
        path:"/admin",
        element:<Admin/>
      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/detail/:id",
        element:<Detail/>
      },
    ]
  },{
    path:"*",
    element:<NotFoundPage/>
  }
])
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
