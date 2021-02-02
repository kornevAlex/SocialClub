import React from 'react';
import PostsContainer from '../MyPosts/postsContainer';
import profile from './profile.module.css';
import MainProfile from './ProfileItem/mainProfile';


const Main = (props) => {
  return (
    <div className={profile.main}>
        <MainProfile/>
          <PostsContainer/>
    </div>
  )
}

export default Main;