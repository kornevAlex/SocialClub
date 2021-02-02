import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer'
import dialogPageReducer from './dialogs-reducer'
import sideBarReducer from './sidebar-reducer'

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogPageReducer,
    sideBar:sideBarReducer,
})
let store = createStore(reducers)

export default store