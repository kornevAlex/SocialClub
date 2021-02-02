import React from 'react'
import avatar from '../../../../img/ava.jpg';
import profile from '../profile.module.css';


const MainProfile = props =>{
    return(
      <div className={profile.mainProfile}>
      <section className={profile.mainCols}>
        <div className={profile.pageBlock}>
          <img className={profile.avatars} src={avatar} alt="Ваша фотография" />
        </div>
        <div className={profile.avatarDescription} >
          <a className = {profile.changeAva} href="#" >Сменить аватар</a>
        </div>
      </section>
        <section className = {profile.description}>
        <h1 className={profile.pageName}> Панк Иосиф Метрофанович</h1>
        <p className = {profile.pageDesc}>
          Часов в игре:
          Рейтинг:
          
        </p>
        </section>
    </div>
    )
  }
  
  export default MainProfile