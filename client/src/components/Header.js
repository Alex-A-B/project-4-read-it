import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <h1>
        <Link to="/">Read it!</Link>
      </h1>
      {user ? (
        <div>
          <p>Welcome {user.username}!</p>
          <Link to="/">
          <button onClick={handleLogout}>Logout</button>
          </Link>
          <Link to="/library">Go to my library</Link>
          <Link to="/add_book">Add a book</Link>
        </div>
      ) : (
          <div>
            <Link to="/login">
                <button>Click Here to Login</button>
            </Link>
            <p>Welcome to Read it! </p>
            <p>Please login to view your library!</p>
        </div>
      )}
    </header>
  );
}

export default Header;
