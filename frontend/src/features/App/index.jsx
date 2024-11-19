import { useEffect, useState } from "react";
import { getBooks } from "@services/books";

function App() {
  const [books, setBooks] = useState([]);

  async function getBooksData() {
    try {
      const response = await getBooks({ title: "horror", page: "3" });
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBooksData();
  }, []);

  return (
    <>
      <h2>BookShelf Admin :- Coming Soon!</h2>
      {books &&
        books.map((book) => (
          <ul key={book.id}>
            <li>{book.title}</li>
          </ul>
        ))}
    </>
  );
}

export default App;
