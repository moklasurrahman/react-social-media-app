import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import "./style.scss"

import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Loginpage from "./pages/login/Loginpage";
import Register from "./pages/registar/Registar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Profile from './pages/profile/Profile';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';


function App() {
  
  //For auth Context
  const {currentUser} = useContext(AuthContext);
  
  //for Dark Mode
  const {darkMode} = useContext(DarkModeContext)
  // console.log(darkMode)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar></NavBar>
       
        <div style={{ display: "flex" }}>
          <LeftBar></LeftBar>
          <div style={{flex: "6"}}>
          <Outlet></Outlet>
          </div>
          <RightBar></RightBar>
        </div>

      </div>
    );
  };

  //Protect Route
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
    return <Navigate to="/login"></Navigate>
  }
  return children
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
                  <Layout></Layout>
                </ProtectedRoute> ,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/profile/:id",
          element: <Profile></Profile>
  
        },
      ]
    },
    

    {
      path: "/login",
      element: <Loginpage></Loginpage>,
    },

    {
      path: "/register",
      element: <Register></Register>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
