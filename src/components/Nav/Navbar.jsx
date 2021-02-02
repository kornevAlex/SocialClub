import React from 'react';
import { NavLink } from 'react-router-dom';
import styleNav from './navbar.module.css'

const Navbar = (props) => {
    return (
        <nav className={styleNav.navSidebar}>
            <ul className={styleNav.sidebarList}>
                <li><NavLink className={styleNav.sidebarListItem} activeClassName={styleNav.activeLink} to="/profile">Profile</NavLink></li>
                <li><NavLink className={styleNav.sidebarListItem} activeClassName={styleNav.activeLink} to="/messages">Messages</NavLink></li>
                <li><NavLink className={styleNav.sidebarListItem} activeClassName={styleNav.activeLink} to="/news">News</NavLink></li>
                <li><NavLink className={styleNav.sidebarListItem} activeClassName={styleNav.activeLink} to="/Musics">Musics</NavLink></li>
                <li><NavLink className={styleNav.sidebarListItem} activeClassName={styleNav.activeLink} to="/settings">Setting</NavLink></li>
            </ul>
            <div className={styleNav.friendContainer}>
                <h2>Friends</h2>
                <ul className={styleNav.friendList}>
                    <li className={styleNav.friendItem}>
                        
                    </li>
                    <li className={styleNav.friendItem}>
                        
                    </li>
                    <li className={styleNav.friendItem}>
                        
                    </li>
                    <li className={styleNav.friendItem}>
                        
                    </li>
                    <li className={styleNav.friendItem}>
                        
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;