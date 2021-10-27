import {createStore} from "redux";
import authReducer from "./auth-reducer";
const store = createStore(authReducer);

window.store = store;
export default store;