import { useEffect, useState } from "react";
import { getBooks } from "@services/books";

function App() {
  const [books, setBooks] = useState([]);

  async function getBooksData() {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getBooksData();
  }, []);

  console.log(books);

  return (
    <>
      <h2>BookShelf Admin :- Coming Soon!</h2>
    </>
  );
}

export default App;
