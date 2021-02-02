import React from 'react';
import Post from './Post/post';
import posts from './posts.module.css';


const Posts = (props) => {
    let postSet = (props.posts).map(p => <Post name={p.name} text={p.text} likes={p.likes} reposts={p.reposts} />)
    let newPostElement = React.createRef()

    let onAddPost = () => {
        let text = newPostElement.current.value
        if (text.length > 0) {
            props.addPost()
        }
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPost(text)
    }
    return (
        <div className={posts.list}>
            <div className={posts.add}>
                <form className={posts.addPost} action="">
                    <div className={posts.icons}>
                        <button type = 'button' className={posts.smile}></button>
                        <button type = 'button' className={posts.photo}></button>
                        <button type = 'button' className={posts.files}></button>
                    </div>
                    <textarea onChange={onPostChange} ref={newPostElement} placeholder="Что у вас нового?" className={posts.textPost} value={props.newPost} />
                    <button type="button" onClick={onAddPost} className={posts.button}> Add Post</button>
                </form>
                {postSet}
            </div>

        </div>
    )
}
export default Posts;