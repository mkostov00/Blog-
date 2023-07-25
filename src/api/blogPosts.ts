import axios from 'axios';

export const getAllBlogPosts = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://crudcrud.com/api/e44a9f13bb06451396831ef42cb62502/blogPosts")
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};