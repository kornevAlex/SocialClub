import profileReducer from './profile-reducer'
import dialogPageReducer from './dialogs-reducer'

const UPDATE_POST = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const store = {
    _state: {
        dialogPage: {
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
            updateNewMessage: '',
        },
        profilePage: {
            posts: [
                { name: "Alexandr Kucher", text: "HI!", likes: "3", reposts: 5 },
                { name: "Viktor", text: "Kyky", likes: "4", reposts: 2 },
                { name: "Alena", text: "I love you", likes: "10" },
                { name: "Ilya ", text: "Going to game with me?", likes: "4" },
            ],
            newPost: '',
        }

    },
    getState() {
        return this._state
    },
    _render() {
        console.log('Not subscribers')
    },
    
    subscribe(observer) {
        this._render = observer //паттерн: наблюдатель
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage,action)
        this._render(this._state)
    }
}



window.store = store
export default store

