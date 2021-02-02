const UPDATE_POST = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        { name: "Alexandr Kucher", text: "HI!", likes: "3", reposts: 5 },
        { name: "Viktor", text: "Kyky", likes: "4", reposts: 2 },
        { name: "Alena", text: "I love you", likes: "10" },
        { name: "Ilya ", text: "Going to game with me?", likes: "4" },
    ],
    newPost: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            const newPost = {
                name: action.name,
                text: state.newPost,
                likes: 0
            }
            return {
                ...state,
                posts:[...state.posts, newPost],
                newPost: ''
            }
        }

        case UPDATE_POST:{
            return{
                ...state,
                newPost:action.text,
            }
        }
        default:
            return state
    }
}

export const addPostActionCreation = () => {
    return {
        type: ADD_POST,
        name: 'John'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        text: text
    }
}

export default profileReducer