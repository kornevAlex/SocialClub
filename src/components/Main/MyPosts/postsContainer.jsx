import React from 'react';
import Post from './Post/post';
import posts from './posts.module.css';
import { addPostActionCreation, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import Posts from './posts';
import { connect } from 'react-redux'



const postNow = (state) => {
    return {
        posts: state.profilePage.posts,
        newPost:state.profilePage.newPost
    }
}
const additionPost = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreation())
        },
        updateNewPost: (text) =>{
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
const PostsContainer = connect(postNow,additionPost)(Posts)
export default PostsContainer;