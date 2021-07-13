import { 
    toggleMenu,
    toggleProject1,
    toggleProject2,
    toggleProject3,
    toggleProject4,
    toggleProject5,
    toggleProject6, 
    fromValueReducer,
    guestNameValueReducer,
    phoneNumberValueReducer,
    textValueReducer
} from "./reducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    toggleMenu,
    toggleProject1,
    toggleProject2,
    toggleProject3,
    toggleProject4,
    toggleProject5,
    toggleProject6,
    fromValueReducer,
    guestNameValueReducer,
    phoneNumberValueReducer,
    textValueReducer
})

export default allReducers;