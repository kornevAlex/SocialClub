import React from 'react'
import dia from './dialogs.module.css'
import logo from '../../../img/avatars/1.jpg'
import DialogItem from './dialog/dialogItem'
import Message from './dialog/message'



const Dialogs = props => {
    var dialogSet = (props.companion).map(c => <DialogItem dispatch = {props.dispatch} id={c.id} logo={logo} name={c.name} time={c.time} />)

    var messagesSet = (props.messages).map(m => <Message name={m.name} text={m.text} time = {m.time} />)
    var newMessage = React.createRef()



    var onWriteMessage = () => {    
          let text = newMessage.current.value
        if (text.length > 0) {
            props.writeMessage()
    }
    }
    var onChangeMessage = () =>{
        let dialogMessage = newMessage.current.value
        props.changeMessage(dialogMessage)
    }

    return (
        <div className={dia.diaMain}>
            <h2>Correspondence</h2>
            <div className={dia.dialogs}>
                <section className={dia.profile}>
                    <ul className={dia.profileList}>
                        {
                            dialogSet
                        }
                    </ul>
                </section>
                <section className={dia.chat}>
                    <div className={dia.messages}>
                        <ul className={dia.messageList}>
                            {
                                messagesSet
                            }
                        </ul>
                    </div>
                </section>

            </div>
            <section className={dia.Message}>
                <form className={dia.fieldMessage} action="">
                    <div className={dia.icons}>
                        <button type = "button" className={dia.smile}></button>
                        <button type = "button" className={dia.photo}></button>
                        <button type = "button" className={dia.files}></button>
                    </div>
                    <textarea onChange ={onChangeMessage} ref={newMessage} placeholder="Введите ваше сообщение" value = {props.newMessage}/>
                    <button type ='button' onClick={onWriteMessage} className={dia.button}> Add Post</button>
                </form>
            </section>
        </div>
    )
}

export default Dialogs;