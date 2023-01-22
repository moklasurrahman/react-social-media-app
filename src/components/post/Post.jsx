import "./post.scss"
import { Link } from 'react-router-dom';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useState } from "react";
import Comments from './../comments/Comments';



const Post = ({post}) => {
    const {name, img, desc} = post

    const [comment, setComment] = useState(false)
    
    const liked = false
    const love = true
  return (
    <div className="post">
        <div className="container">
        <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none"}}>
                        <span>{name}</span>
                    </Link>
                    <span className="date">1 min ago</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon className="icon"/>
        </div>
        <div className="content">
            <p>{desc}</p>
            <img src={img} alt="" />
        </div>
        <div className="info">
            <div className="item">
                {liked ? <ThumbUpIcon style={{color:"green"}}/> : <ThumbUpOutlinedIcon/>}
                0 Likes  
            </div>

            <div className="item">
                {love ? <FavoriteIcon style={{color:"red"}}/> : <FavoriteBorderOutlinedIcon/>}
                14 Loves 
            </div>

            <div className="item" onClick={()=> setComment(!comment)}>
                <ModeCommentOutlinedIcon/>
                30 Comments  
            </div>

            <div className="item">
                <ShareOutlinedIcon/>
                1 Share  
            </div>
        </div>
        {comment && <Comments></Comments>}
        </div>
    </div>
  )
}

export default Post