import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer"
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:"main-root",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer,applyMiddleware(thunk))
const persistor = persistStore(store)

export {persistor}
export default store

// export default function configureStore(){
//     return createStore(rootReducer, applyMiddleware(thunk))
// }