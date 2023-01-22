import "./comment.scss"
import { AuthContext } from './../../context/AuthContext';
import { useContext } from 'react';

const comments = [
    {
        id: 1,
        userId: 1,
        desc: "Et proident anim dolore velit Lorem ad. Amet dolore do exercitation id labore aute nostrud ullamco aliquip pariatur. Exercitation magna exercitation aliqua dolor. Ipsum consequat dolor irure aute. Sint consectetur culpa in excepteur cupidatat.",
        name: "Jane shing",
        profilePhoto: "../../../assets/person/1.jpeg"

    },
    {
        id: 2,
        userId: 2,
        desc: "Et proident anim dolore velit Lorem ad. Amet dolore do exercitation id labore aute nostrud ullamco aliquip pariatur. Exercitation magna exercitation aliqua dolor. Ipsum consequat dolor irure aute. Sint consectetur culpa in excepteur cupidatat.",
        name: "Jabir",
        profilePhoto: "../../../assets/person/2.jpeg"

    },
]

const Comments = () => {
    const {currentUser} = useContext(AuthContext);
  return (
    <div className="comments">
        <hr />
        <div className="write">
           <img src={currentUser.profileImg} alt="" />
           <input type="text" placeholder="Write a comment" />
           <button>Send</button>
        </div>
        <hr />
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePhoto} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">2 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments