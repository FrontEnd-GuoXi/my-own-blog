import axios from 'axios';


 const http = axios.create({
  baseURL: '/api/',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
 });


 // 发布一篇博客
 export const publishBlog = (postData) => http.post('blog/new', postData);

 // 查询一篇博客
 export const getBlogById = (id) => http.get(`blog/detail?id=${id}`);

 // 获取某个用户的所有博客
export const getBlogList = (keyword = '') => http.get(`blog/list?keyword=${keyword}`);

// 删除一篇博客
export const delBlog = (id) => http.post(`blog/del?id=${id}`);



 export default http;