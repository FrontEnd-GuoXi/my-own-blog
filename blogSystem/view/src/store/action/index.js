import http from '../../service/index'

export const loginAct = (postData) => (async (dispatch) => {
  try {
    const res = await http.post('user/login', postData);
    dispatch({type: 'LOGIN', loginData: res.data});
    return res;
  } catch (e) {
    dispatch({type: 'ERROR', errLog: e});
  }  
});

export const logoutAct = () => ({
  type: 'LOGOUT'
});







