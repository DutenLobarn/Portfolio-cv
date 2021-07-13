// Används i Nav.js
export const toggleMenu = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLEMENU':
            return action.payload;
        default:
            return state;
    }};

// Används i Portfolio.js
export const toggleProject1 = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLEPROJECT1':
            return action.payload;
        default:
            return state;
    }};
export const toggleProject2 = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLEPROJECT2':
            return action.payload;
        default:
            return state;
    }};
export const toggleProject3 = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLEPROJECT3':
            return action.payload;
        default:
            return state;
    }};
export const toggleProject4 = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLEPROJECT4':
            return action.payload;
        default:
            return state;
    }};
export const toggleProject5 = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLEPROJECT5':
            return action.payload;
        default:
            return state;
    }};
export const toggleProject6 = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLEPROJECT6':
            return action.payload;
        default:
            return state;
    }};

    // email from the guest

    export const fromValueReducer = (state = '', action) => {
        switch(action.type) {
            case 'FROMVALUE':
                return action.payload;
            default:
                return state;
        }};
    export const guestNameValueReducer = (state = '', action) => {
        switch(action.type) {
            case 'GUESTNAME':
                return action.payload;
            default:
                return state;
        }};
    export const phoneNumberValueReducer = (state = '', action) => {
        switch(action.type) {
            case 'PHONENUMBER':
                return action.payload;
            default:
                return state;
        }};
    export const textValueReducer = (state = '', action) => {
        switch(action.type) {
            case 'TEXT':
                return action.payload;
            default:
                return state;
        }};