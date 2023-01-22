import React from 'react'
import "./share.scss"

import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoodIcon from '@mui/icons-material/Mood';


const Share = () => {

  return (
    <div className="share">
        <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/myimg.jpg" alt="" className='shareImg'></img>
          <input className="shareInput" placeholder="What is in your mind Taj?"></input>
        </div>
        <hr className="shareHr"></hr>
        
        <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                  <PermMediaIcon htmlColor="tomato" className="shareIcon"></PermMediaIcon>
                  <span className="shareOptionText">Photo or Video</span>
              </div>
              <div className="shareOption">
                  <LabelIcon htmlColor="blue" className="shareIcon"></LabelIcon>
                  <span className="shareOptionText">Tag</span>
              </div>

              <div className="shareOption">
                  <LocationOnIcon htmlColor="green" className="shareIcon"></LocationOnIcon>
                  <span className="shareOptionText">Location</span>
              </div>

              <div className="shareOption">
                  <MoodIcon htmlColor="goldenrod" className="shareIcon"></MoodIcon>
                  <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button className="shareBtn">Share</button>
        </div>
        </div>
    </div>
  )
}

export default Share