import axios from 'axios';

export const getAllBlogPosts = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://crudcrud.com/api/bf736de8ff4f45f9ada9f2acc511000e/blogPosts")
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createBlogPost = ({ title, description, picture }: any) => {
  return new Promise((resolve, reject) => {
    axios.post("https://crudcrud.com/api/bf736de8ff4f45f9ada9f2acc511000e/blogPosts", {
        title,
        description,
        picture
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const editBlogPost = ({ title, description, id }: any) => {
  return new Promise((resolve, reject) => {
    axios.put(`https://crudcrud.com/api/bf736de8ff4f45f9ada9f2acc511000e/blogPosts/${id}`, {
        title,
        description,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const deleteBlogPost = (id: string) => {
  return new Promise((resolve, reject) => {
    axios.delete(`https://crudcrud.com/api/bf736de8ff4f45f9ada9f2acc511000e/blogPosts/${id}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};