

export const login = (state = {}, action) => {

    switch (action.type) {
      case 'LOGIN':
        return {...state, ...{ loginData: action.loginData} }
      case 'LOGOUT':
        return {};
      case 'ERROR':
        return {...state, ...{ loginErr: action.errLog} };
      default:
        return state;
    }
}