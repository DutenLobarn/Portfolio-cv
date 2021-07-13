// Används i Nav.js
const toggleMenuAction = (param) => {
    return {
        type: 'TOGGLEMENU',
        payload: param
    }};

    // Används i Portfolio.js
    const toggleProject1Action = (param) => {
        return {
            type: 'TOGGLEPROJECT1',
            payload: param
        }};
    const toggleProject2Action = (param) => {
        return {
            type: 'TOGGLEPROJECT2',
            payload: param
        }};
    const toggleProject3Action = (param) => {
        return {
            type: 'TOGGLEPROJECT3',
            payload: param
        }};
    const toggleProject4Action = (param) => {
        return {
            type: 'TOGGLEPROJECT4',
            payload: param
        }};
    const toggleProject5Action = (param) => {
        return {
            type: 'TOGGLEPROJECT5',
            payload: param
        }};
    const toggleProject6Action = (param) => {
        return {
            type: 'TOGGLEPROJECT6',
            payload: param
        }};

    const fromValueAction = (param) => {
        return {
            type: 'FROMVALUE',
            payload: param
        }};
    const guestNameValueAction = (param) => {
        return {
            type: 'GUESTNAME',
            payload: param
        }};
    const phoneNumberValueAction = (param) => {
        return {
            type: 'PHONENUMBER',
            payload: param
        }};
    const textValueAction = (param) => {
        return {
            type: 'TEXT',
            payload: param
        }};

    export {
        toggleMenuAction,
        toggleProject1Action,
        toggleProject2Action,
        toggleProject3Action,
        toggleProject4Action,
        toggleProject5Action,
        toggleProject6Action,
        fromValueAction,
        guestNameValueAction,
        phoneNumberValueAction,
        textValueAction
    };