import React from 'react'
import "./rightBar.scss"
const RightBar = () => {
  return (
    <div className='rightbar'>
      
      <div className="container">
        <div className="item">
          <span>Suggestions For you</span>
          
          <div className="user">
            <div className="userinformation">
            <img src="/assets/person/9.jpeg" alt="" />
            <span>Black Quin</span>
            </div>
            <div className="btn">
              <button type="submit">Follow</button>
              <button type="submit">Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userinformation">
            <img src="/assets/person/7.jpeg" alt="" />
            <span>Black</span>
            </div>
            <div className="btn">
              <button type="submit">Follow</button>
              <button type="submit">Dismiss</button>
            </div>
          </div>
        </div>
        
        {/* Latest Activities start*/}

        <div className="item">
          <span>Latest Activities</span>
          
          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/9.jpeg" alt="" />
              <p><span>Black Quin</span> Changed ther cover picture</p>
            </div>
            <span>1min ago</span>
          </div>

          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/3.jpeg" alt="" />
              <p><span>Quin</span> Like a post</p>
            </div>
            <span>4min ago</span>
          </div>

          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/8.jpeg" alt="" />
              <p><span>Popita</span> Like a commment</p>
            </div>
            <span>10min ago</span>
          </div>

          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/4.jpeg" alt="" />
              <p><span>pianka</span> Like a posted</p>
            </div>
            <span>1hours ago</span>
          </div>

    
        </div>


        {/* Online Friends start*/}
        <div className="item">
          <span>Online Friends</span>
          
          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/1.jpeg" alt="" />
              <div className="online"></div>
              <span>Anika</span>
            </div>
          </div>

          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/2.jpeg" alt="" />
              <div className="online"></div>
              <span>Bekar Adam</span>
            </div>
          </div>

          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/3.jpeg" alt="" />
              <div className="online"></div>
              <span>Kanis Ani</span>
            </div>
          </div>

          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/4.jpeg" alt="" />
              <div className="online"></div>
              <span>Chiao</span>
            </div>
          </div>

          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/5.jpeg" alt="" />
              <div className="online"></div>
              <span>Riti Ahammed</span>
            </div>
          </div>


          <div className="user">
            <div className="userinformation">
              <img src="/assets/person/6.jpeg" alt="" />
              <div className="online"></div>
              <span>Adam</span>
            </div>
          </div>
    
        </div>
{/* end */}

      </div>
</div>
  )
}

export default RightBar