import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import passengerSlice from "./passengerSlice";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    passenger: passengerSlice
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({reducer: persistedReducer});
const persistor = persistStore(store)

export { store, persistor }