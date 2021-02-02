import React from 'react';
import post from './post.module.css';

const Post = (props) => {
    return (
        <div className={post.postBlock}>
            {props.name}
            <div className={post.avatars}>

            </div>
            <div className={post.text}>
                {props.text}
            </div>
            <div className={post.comment}></div>
            <div className={post.auditories}>
                repost {props.reposts}

                <div className={post.likes}>
                    likes {props.likes}
                </div>
            </div>
        </div>
    )
}

export default Post;