import React, { Component } from 'react';
import { publishBlog } from '../../service/index';


class NewBlog extends Component {

    constructor (props) {
      super(props);
      this.state = { title: '', content: '' };
      this.publish = this.publish.bind(this);
    }

    async publish (e) {
      console.log(e)
      let title = this.refs.articleTitle.value;
      let content = this.refs.articleConent.value;
      let author = null;
      let postData = { title, content, author };

      let res = await publishBlog(postData);
      console.log(res);
      if (res.data.success) {
        this.setState({ title: '', content: '' }); 
      }
      alert(res.data.message);
    }

    getTitle ({ target }) {
      this.setState({ title: target.value });
    }

    getConent ({ target }) {
      this.setState({ content: target.value });
    }

    render () {

      return (<div className="new-blog-page">
          <header>
            <input type="text" className="title" 
              ref="articleTitle" value={this.state.title} onChange={ this.getTitle.bind(this) } />
            <button type="submit" onClick={this.publish}>发布</button>
          </header>
          <main>
            <textarea ref="articleConent" 
              value={ this.state.content } onChange={ this.getConent.bind(this) }></textarea>
          </main>
      </div>);

    }
}

export default NewBlog;