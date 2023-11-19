import { applyMiddleware, combineReducers } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { createStore } from "redux"
import homeReducer from "./reducers/HomeData"
import { composeWithDevTools } from "redux-devtools-extension"



let initialState = {

}

let reducers = combineReducers({
    getVideos: homeReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;