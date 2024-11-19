import axios from "axios";

import { BOOKS_API_ROUTES } from "@utils/apiRoutes";
import fetchBooksData from "@data/fetchBooks.json";

const booksAPI = axios.create({
  baseURL: import.meta.env.VITE_BOOKS_API_URL,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_BOOKS_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_BOOKS_API_HOST,
  },
});

export const getBooks = async (params) => {
  const { title, page } = params;
  return { data: fetchBooksData };

  //   return booksAPI.get(`${BOOKS_API_ROUTES.FETCH_EBOOKS}/${title}/${page}`);
};
