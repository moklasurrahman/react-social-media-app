import "./stories.scss"
import { useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';



const stories = [

   { 
    id: 1,
    name: "Baker vai",
    img: "/assets/person/7.JPEG"
    },
    { 
        id: 2,
        name: "Black",
        img: "/assets/person/2.JPEG"
        },
        { 
            id: 3,
            name: "Quin",
            img: "/assets/person/3.JPEG"
            },
            { 
                id: 4,
                name: "Black Quin",
                img: "/assets/person/4.JPEG"
                }
]




const Stories = () => {

    const {currentUser} = useContext(AuthContext)
  return (
    <div className="storys">
        <div className="story">
                    <img src={currentUser.profileImg} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
        {
            stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Stories