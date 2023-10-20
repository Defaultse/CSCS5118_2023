import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/es/storage";
import loggedReducer from "./LoggedReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['isLogged']
}

const allReducers = combineReducers({
    isLogged: loggedReducer,
})

export default persistReducer(persistConfig, allReducers);
// export default allReducers