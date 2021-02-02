import React from 'react'
import {connect} from 'react-redux'
import { writeMessageAction, changeMessageAction } from '../../../Redux/dialogs-reducer'
import Dialogs from './dialogs'



const downloadDialogState = (state) => {
    return {
        newMessage: state.dialogPage.newMessage,
        companion:state.dialogPage.companion,
        messages:state.dialogPage.messages,
    }
}

const appealDispatch = (dispatch) =>{
    return {
        writeMessage: ()=> {
            dispatch(changeMessageAction())
        },
        changeMessage:  (dialogMessage) => {
            
    debugger
            dispatch(writeMessageAction(dialogMessage))
        },
        dispatch: ()=>{
            dispatch()
        }
    }

}

const DialogsContainer = connect(downloadDialogState,appealDispatch)(Dialogs)
export default DialogsContainer;