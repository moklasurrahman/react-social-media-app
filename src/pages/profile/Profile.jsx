import React from 'react'
import "./profile.scss"

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from './../../components/posts/Posts';
const Profile = () => {

  return (
    <div className="profile">
        <div className="images">
          <img src="/assets/person/myimg.jpg" className="cover" alt="" />
          <img src="/assets/person/myimg.jpg" className="profilimg" alt="" />
        </div>
        <div className="profileContainer">
          <div className="userInformetion">
            <div className="left">
              <a href="https://web.facebook.com/profile.php?id=100004143574385">
                <FacebookRoundedIcon className='icon'/>
              </a>
              <a href="#">
                <InstagramIcon className='icon'/>
              </a>
              <a href="#">
                <LinkedInIcon className='icon'/>
              </a>
              <a href="#">
                <TwitterIcon className='icon'/>
              </a>
              <a href="#">
                <PinterestIcon className='icon'/>
              </a>
            </div>
            <div className="center">
              <span className="username">Moklasur rahman</span><br />
              <div className="info">
                <div className="item">
                  <LocationOnIcon/><span>USA</span>
                </div>
                <div className="item">
                  <LanguageIcon/><span>English</span>
                </div>
              </div><br />
              <button>Follow</button>
            </div>
            <div className="right">
              <MailOutlineIcon/>
              <MoreVertIcon/>
            </div>
          </div>
               <Posts/>

        </div>
      </div>

  )
}

export default Profile