import axios from "axios";

const booksAPI = axios.create({
  baseURL: import.meta.env.VITE_BOOKS_API_URL,
});

export const getBooks = async (params) => {
  console.log(import.meta.env.VITE_BOOKS_API_URL);
  return booksAPI.get("", { params });
};
