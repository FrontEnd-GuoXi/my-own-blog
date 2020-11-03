import React, { Component } from 'react';
import { getBlogById, delBlog } from '../../service/index';
import { withRouter } from 'react-router-dom';


class Blog extends Component {

  constructor (props) {
    super(props);
    this.state = { 
      article: null, 
      title: null, 
      publishTime: null,
      author: null
    };
    this.id = null;
  }


  async componentWillMount () {
    const curUrl = new URLSearchParams(this.props.location.search);
    this.id = curUrl.get('blogId');
    const res = await getBlogById(this.id);

    if (res.data.success) {
      let { 
        content: article,
        title, 
        createtime: publishTime, 
        author 
      } = res.data.data;

      this.setState({ article, title, publishTime, author });
    } else {
      this.props.history.push('home');
    }
  }

  artUpdate () {}

  async artDel () {
    const res = await delBlog(this.id);
    if (res.data.success) {
      this.props.history.push('home');
    }
  }

  render () {
    return (<div>
      <header>{ this.state.title }</header>
      <article>{ this.state.article }</article>
      <footer>
        <div>{ `${this.state.author}_${this.state.publishTime}` }</div>
        <div>
          <button type="button" onClick={this.artUpdate.bind(this)}>修改</button>
          <button type="button" onClick={this.artDel.bind(this)}>删除</button>
        </div>
      </footer>
    </div>);
  }

}


export default withRouter(Blog);
