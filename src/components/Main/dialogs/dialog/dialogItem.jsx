import React from 'react'
import dia from '../dialogs.module.css'
import { NavLink } from 'react-router-dom'
import  {deleteMessageAction} from './../../../../Redux/dialogs-reducer'

const DialogItem = props => {
let deleteDialogs = () =>{
    let conf = window.confirm(`Вы действительно хотите удалить диалог с '${props.name}'?`)
    if(conf){
        let action = deleteMessageAction(props.id)
        props.dispatch(action)
    }

}
    let path = "/messages/" + props.id
    return (
        <li className={dia.profileLi}>
            <NavLink to={path} className={dia.profileLink} activeClassName={dia.activeDialog}>
                <div className={dia.itemPhoto}>
                    <img className={dia.img} src={props.logo} />
                </div>
                <div className={dia.itemLink}>
                    <div className={dia.dialogName}>{props.name}</div>
                </div>
                <div className={dia.dialogTime}>{props.time}</div>
                <button type ='button' onClick = {deleteDialogs} className={dia.btnDeleteDia}> <i id ="close" className="fa fa-close " ></i></button>
            </NavLink>
        </li>
    )
}

export default DialogItem