import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import { loggedReducer, sellerReducer } from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['isLogged', 'isSeller']
}

const allReducers = combineReducers({
    isLogged: loggedReducer,
    isSeller: sellerReducer,
});

export default persistReducer(persistConfig, allReducers);
