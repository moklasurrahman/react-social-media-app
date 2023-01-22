import { useContext, useState } from "react";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';



import './navBar.scss'
import { Link } from 'react-router-dom';
import { DarkModeContext } from './../../context/darkModeContext';
import { AuthContext } from "../../context/AuthContext";
import RightBar from "../rightBar/RightBar";

const NavBar = () => {
  
  const {toggle, darkMode} = useContext(DarkModeContext)

  const {currentUser} = useContext(AuthContext)

  



  return (
    <div>
      <div className="navBar">
        <div className="left">
          <Link to="/">
            <FacebookOutlinedIcon className="logo"></FacebookOutlinedIcon>
          </Link>

          <HomeOutlinedIcon className="navIcon"></HomeOutlinedIcon>
         
          {darkMode ? (<WbSunnyIcon style={{color: "yellow"}} className="navIcon" onClick={toggle}/>)
          
          :(<DarkModeOutlinedIcon className="navIcon" onClick={toggle}/>
          )}
         
          <GridViewOutlinedIcon className="navIcon"></GridViewOutlinedIcon>

          <div className="search">
          <SearchOutlinedIcon></SearchOutlinedIcon>
          <input placeholder='Search Facebook'></input>
          </div>

        </div>

        <div className="right">
          <PersonOutlineOutlinedIcon className="navIcon"></PersonOutlineOutlinedIcon>
          <EmailOutlinedIcon className="navIcon"></EmailOutlinedIcon>
          <NotificationsOutlinedIcon className="navIcon"></NotificationsOutlinedIcon>
          <div className="user">
          <img src={currentUser.profileImg} alt='' className='topbarImg'></img>
            <span>{currentUser.name}</span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar