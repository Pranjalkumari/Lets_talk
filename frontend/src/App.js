
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import {Login}  from './components/Login';

import {Signup}  from './components/Signup';
import { Homepage } from './components/Homepage';


const router = createBrowserRouter([
{
   path: "/",
   element:<Homepage/>
 },
  {
    path:"/Signup",
    element:<Signup/>
    },
    {
      path:"/Login",
      element:<Login/>
      }
])

function App() {
  return (
    <div className="p-4 h-screen flrx items-center justify-center">
 <RouterProvider router={router}/>
    </div>
  );
}

export default App;

