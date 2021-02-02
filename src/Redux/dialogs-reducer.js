const UPDATE_MESSAGE = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const DELETE_DIALOGS = 'DELETE-DIALOGS'

let initialState = {
    messages: [
        { id: 1, name: 'Yohan', text: "How old are you", time: '14:23' },
        { id: 2, name: "Keaxas", text: "How ", time: '14:23' },
        { id: 3, name: "Yohan", text: "How old", time: '14:23' },
        { id: 4, name: "Keaxas", text: "How old are", time: '14:23' },
        { id: 5, name: "Yohan", text: "How old are you", time: '14:23' },
        { id: 6, name: "Keaxas", text: 'WTF Bro', time: '12:33' }
    ],
    companion: [
        { id: 1, name: "Вахтанг", time: '14:23' },
        { id: 2, name: "dsadsa", time: '14:23' },
        { id: 3, name: "Вахxxaxтанг", time: '14:23' },
        { id: 4, name: "vvcxcvxczcz", time: '14:23' },
        { id: 5, name: "cxzczxc", time: '14:23' }
    ],
    newMessage: '',
}

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            const time = new Date().toLocaleTimeString()
            const addMessage = {
                id: state.messages.length + 1,
                name: action.name,
                text: state.newMessage,
                time: time.slice(0, -3),
            }
            return {
                ...state,
                messages:[...state.messages,addMessage],
                newMessage: '',
        }
    }
        case UPDATE_MESSAGE:{
            return {
                ...state,
                newMessage: action.text,
            }
        }
        case DELETE_DIALOGS:
            state.companion.forEach(el => {
                if (el.id === action.id) state.companion.splice(action.id-1, 1)
            })
            for(let i in state.companion){
                state.companion[i].id = +i+1
                i++
            }
            return state
        
        default:
            return state
    }
}

export const writeMessageAction = (dialogMessage) => {
    return {
        type: UPDATE_MESSAGE,
        text: dialogMessage
    }
}

export const changeMessageAction = () => {
    return {
        type: ADD_MESSAGE,
        name: 'James'
    }
}

export const deleteMessageAction = (id) => {
    return {
        type: DELETE_DIALOGS,
        id,
    }
}
window.state = initialState
export default dialogPageReducer