import React from "react";
import Feed from "../../components/feed/Feed";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
       
        <Stories/>

        {/* share  */}
        <Feed></Feed>

        <Posts/>
       
        
      </div>
    </>
  );
};

export default Home;
