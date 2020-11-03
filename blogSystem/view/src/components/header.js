import React , {Component} from 'react';
import { withRouter } from 'react-router';
import '../style/header.css';


class Header extends Component {
  constructor (props) {
    super(props);
    this.state = { realname: null }
  }

  componentWillMount () {
    let realname = JSON.parse(window.localStorage.getItem('userInfo')).realname;
    this.setState({ realname });
  }

  render () {
    return (<header className="app-header">
      <div>Test</div>
      <div className="person">
        <div className="nickname">{ this.state.realname }</div>
        <div className="hover-list">
          <ul>
            <li onClick={ () => {this.props.history.push('/newBlog')} }>发布文章</li>
            <li>个人资料</li>
          </ul>
        </div>
      </div>
    </header>)
  }
}


export default withRouter(Header);
