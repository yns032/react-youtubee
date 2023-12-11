import { applyMiddleware, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import homeReducer from "./reducers/HomeData"
import { composeWithDevTools } from "redux-devtools-extension"
import detailReducer from "./reducers/Detail"



let initialState = {

}

let reducers = combineReducers({
    getVideos: homeReducer,
    getVideo: detailReducer
})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;