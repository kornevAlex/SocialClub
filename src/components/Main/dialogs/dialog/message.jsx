import React from 'react'
import dia from '../dialogs.module.css'


const Message = props => {
    let writer = `${props.name}:  `
    return (
        <li className={dia.messageItem}>
            <div className={dia.chatName}> {writer}</div>
            <div className={dia.chatText}> {props.text}</div>
            <p className = {dia.time} >{props.time}</p>
        </li>
    )
}
export default Message