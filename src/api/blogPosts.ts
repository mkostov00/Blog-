import axios from 'axios';
import { IPost } from '../context/BlogPostProvider';

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

export const createBlogPost = ({ title, description, picture }: IPost) => {
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

export const editBlogPost = ({ title, description, _id }: IPost) => {
  return new Promise((resolve, reject) => {
    axios.put(`https://crudcrud.com/api/bf736de8ff4f45f9ada9f2acc511000e/blogPosts/${_id}`, {
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