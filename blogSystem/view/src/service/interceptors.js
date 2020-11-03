import http from './index';
import createHistory from 'history/createHashHistory';


http.interceptors.response.use(function (response) {
  const history = createHistory();
  if (response.data.message === '未登录') {
    history.push('/login');
  }
  return response;
});