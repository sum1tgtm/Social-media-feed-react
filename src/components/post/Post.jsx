import './post.css'
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../userData'
import { useState } from 'react';


export default function Post({ post }) {
    const user = Users.filter(x => x.id === post.userId)[0]

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(prev => !prev)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" onClick={likeHandler} alt="" className='likeIcon' />
                        <img src="assets/heart.png" onClick={likeHandler} alt="" className='likeIcon' />
                        <span className="postLikeCounter">{like} people like it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
