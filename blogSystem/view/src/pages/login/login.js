import React, { Component } from 'react';
import './login.css';
import { withRouter } from 'react-router';
import http from '../../service/index';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '',password: ''};
    this.login = this.login.bind(this);
  }

  async login(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const postData = { username,password };
    const res = await http.post('user/login', postData);

    if (res.data.success) {
      window.localStorage.setItem('userInfo', JSON.stringify({...res.data.data, currentAuthority: 'user'}))
      this.props.history.push({ pathname: 'home' });
    } else {
      alert('登录失败');
    }
  }


  render() {

    return ( <div className="container">
      <form className="login-form">
        <div className="form-item">
          <label className="item-title">用户名：</label> 
          <div className="item-content">
          <input name = "username" type="text" value = {this.state.username}
          onChange = {e => this.setState({username: e.target.value})} placeholder="请输入用户名" />
          </div> 
        </div> 
      <div className = "form-item" >
      <label className = "item-title">密码：</label> 
      <div className = "item-content">
      <input name="password" type="password" value={this.state.password}
      onChange={e => this.setState({password: e.target.value})} placeholder="请输入密码"/>
      </div></div><div className="form-item">
      <label className="item-title"></label>
      <button type="submit" onClick={this.login}>
        登录
      </button>
      </div></form></div>
    );

  }

}


export default withRouter(Login);