import React , {Component} from 'react';
import Header from '../../components/header';
import { getBlogList } from '../../service';
import { withRouter } from 'react-router-dom'



class Home extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      blogList: []
    };
    this.goDetail = this.goDetail.bind(this);
  }

  async componentWillMount () {
    const res = await getBlogList();
    if (res.data.success) {
      this.setState({ blogList: res.data.data });
    }
  }

  goDetail (id) {
    let path = `detail?blogId=${id}`;
    this.props.history.push(path);
  }

  render () {
    return (<div className="home">
      <Header></Header>
      <main>
        { this.state.blogList.map((item, index) => {
          return (<div key={index}>
            <div onClick={() => this.goDetail(item.id)}>{item.title}</div>
          </div>)
        }) }
      </main>
    </div>);
  }

}


export default withRouter(Home);