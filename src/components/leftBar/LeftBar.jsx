import './leftBar.scss'
import { useContext } from 'react'
import { AuthContext } from './../../context/AuthContext';

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
  <div className="leftBar">
    <div className="container">
      <div className="manu">
        
        <div className="user">
          <img src={currentUser.profileImg} alt="" />
          <span>{currentUser.name}</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/1.png" alt="" />
          <span>Friends</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/2.png" alt="" />
          <span>Groups</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/3.png" alt="" />
          <span>Marketplace</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/4.png" alt="" />
          <span>Watch</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/5.png" alt="" />
          <span>Memories</span>
        </div>
      </div>
      
      {/* Your shortcuts start */}

      <hr></hr>
      <div className="manu">
        <span>Your shortcuts</span>
        <div className="item">
        <img src="/assets/leftimg/6.png" alt="" />
          <span>Events</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/7.png" alt="" />
          <span>Gaming</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/8.png" alt="" />
          <span>Gallery</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/9.png" alt="" />
          <span>Videos</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/10.png" alt="" />
          <span>Messages</span>
        </div>

      </div>

      {/* other start */}

      <hr></hr>
      <div className="manu">
        <span>Others</span>
        <div className="item">
        <img src="/assets/leftimg/11.png" alt="" />
          <span>Events</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/12.png" alt="" />
          <span>Gaming</span>
        </div>

        <div className="item">
        <img src="/assets/leftimg/13.png" alt="" />
          <span>Fundraiser</span>
        </div>

      </div>

    </div>
    
    </div>
  )
}

export default LeftBar