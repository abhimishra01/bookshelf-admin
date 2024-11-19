import axios from "axios";

const booksAPI = axios.create({
  baseURL: import.meta.env.VITE_BOOKS_API_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const getBooks = async (params) => {
  return booksAPI.get("/", { params });
};
