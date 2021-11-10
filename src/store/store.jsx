import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import sliceTodo from "./sliceTodo";
import storage from "redux-persist/lib/storage";


const reducer = combineReducers({
    todo: sliceTodo
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({reducer: persistedReducer})
const persistor = persistStore(store)

export {store, persistor}