const SET_FORM_LOGIN = 'SET_FORM_LOGIN';
const SET_FORM_PASS = 'SET_FORM_PASS';
const SET_VALID = 'SET_VALID';

const initialState = {
    login: 'developer21',
    pass: '123456',
    formLogin: '',
    formPass: '',
    valid: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_LOGIN:
            return {
                ...state,
                formLogin: action.login
            }
        case SET_FORM_PASS:
            return {
                ...state,
                formPass: action.pass
            }
        case SET_VALID:
            if (state.login === state.formLogin && state.pass === state.formPass)
                return {
                    ...state,
                    valid: true
                }
            else
                return {
            ...state,
            valid: false
        }
        default:
            return state
    }
}
export const setFormLogin = login => ({type: SET_FORM_LOGIN, login})
export const setFormPass = pass => ({type: SET_FORM_PASS, pass})
export const setValid = () => ({type: SET_VALID})
export default authReducer;