import React, { Suspense,lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import Body from './component/Body'
import About from './component/About';
import Contact from './component/Contact Us';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Errorelem from './component/Errorelem';
import Menu from './component/Menu';
// import Profile from './component/Profile';
import Login from './component/Login';
import Cart from './component/Cart';
// import Instamart from './component/Instamart';
 const Instamart = lazy(()=>import ('./component/Instamart'))
// const Contact = React.lazy(()=>import('./component/Contact Us'))




const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
   errorElement:<Errorelem/>,
    children:[
      {
        path: "/",
        element: <Body user={{
          name : 'username',
          email : 'useremail'
        }}/>,
      },
       {
        path: "/About",
        element: <About />,
        // children:[
        //   {
        //     path: "/profile",
        //     element: <Profile/>
        //   }
        // ]
      },
      {
        path: "/Contact",
        element: <Contact />,    
      },
      {
        path: "/Cart",
        element: <Cart />,    
      },
      {
        path: "/login",
        element: <Login />,    
      },

      {
        path: "/instamart",
        element: <Suspense><Instamart /></Suspense>,    
      },
      {
        path:"/menu/:id",
        element:<Menu/>
      },
    ]

  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  //  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
