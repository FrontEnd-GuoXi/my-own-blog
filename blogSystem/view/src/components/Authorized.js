import { withRouter } from 'react-router';


function Authorized (props) {

  const { children, noMatch, authority } = props;
  let userInfo = localStorage.getItem('userInfo');

  if (!userInfo) {
    props.history.push({ pathname: 'login' });
    return null;
  }

  const { currentAuthority } = userInfo = JSON.parse(userInfo);
  if (!authority) return children;
  const _authority = Array.isArray(authority) ? authority : [authority];

  if (_authority.includes(currentAuthority)) {
    return children;
  }

  return noMatch;
}

export default withRouter(Authorized);