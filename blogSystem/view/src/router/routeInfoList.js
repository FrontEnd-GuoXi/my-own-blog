import Home from '../pages/home/home.js';
import NewBlog from '../pages/newBlog/NewBlog';
import Blog from '../pages/blog/blog';


export default [{
  name: 'Home',
  component: Home,
  path: '/home',
  authority: ['user'],
  redirect: '/404'
}, {
  name: 'NewBlog',
  component: NewBlog,
  path: '/newBlog',
  authority: ['user'],
  redirect: '/404'
},{
  name: 'Blog',
  component: Blog,
  path: '/detail',
  authority: ['user'],
  redirect: '/404'
}]