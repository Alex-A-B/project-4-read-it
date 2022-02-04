import { useState, useEffect } from "react"
import { Routes , Route} from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import Home from "./Home"
import UserLibrary from "./UserLibrary"
import AddBookForm from "./AddBookForm"
import AddNewUser from "./AddNewUser"



function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user){
    setUser(user)
  }

  function handleLogout() {
    setUser(null)
  }

  useEffect(() => {
    fetch("/books")
    .then(response => response.json())
    .then(books => setBooks(books))

  }, [])

  function handleAddBook(newBook) {setBooks(books => [...books, newBook])}

  function handleRemoveBook(id) {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  }

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
        <Route exact path="/library" element={<UserLibrary user={user} books={books} onRemoveBook={handleRemoveBook} />} />
        <Route exact path="/add_book" element={<AddBookForm user={user} onAddBook={handleAddBook} />} />
        <Route exact path="/create_user" element={<AddNewUser onAddUser={handleLogin} />} />
        <Route exact path="/" element={<Home />}  />
      </Routes>
    </div>
    
  );
}

export default App;
