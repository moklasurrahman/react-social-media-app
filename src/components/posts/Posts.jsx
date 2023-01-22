import React from 'react'
import Post from '../post/Post'
import "./posts.scss"

const posts =[
  {
    id: 1,
    name: "Jon Fakar",
    userId: 1,
    profilePic: "/assets/person/7.JPEG",
    desc: "jon fakar is jon fakar he is jon fakar she is jon fakar hope she/he is nice",
    img: "/assets/post/1.jpeg"
  },

  {
    id: 2,
    userId: 1,
    name: "Jon",
    profilePic: "/assets/person/8.JPEG",
    desc: "jon fakar is jon fakar he is jon fakar she is jon fakar hope she/he is nice",
    img: "/assets/post/2.jpeg"
  },

  {
    id: 3,
    userId: 1,
    name: "Jon doa",
    profilePic: "/assets/person/9.JPEG",
    desc: "jon fakar is jon fakar he is jon fakar she is jon fakar hope she/he is nice",

  },
]

const Posts = () => {
  return (
    <div className="posts">
      {
        posts.map(post=>(
          
            <Post post={post} key={post.id}></Post>
          
        ))
      }
    </div>
  )
}

export default Posts