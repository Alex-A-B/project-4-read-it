import { useState, useEffect } from "react"
import { Routes , Route} from "react-router-dom"
import Header from "./Header"
import Login from "./Login"
import Home from "./Home"
import UserLibrary from "./UserLibrary"



function App() {
  const [user, setUser] = useState(null);

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

  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
        <Route exact path="/library" element={<UserLibrary user={user} />} />
        <Route exact path="/" element={<Home />}  />
      </Routes>
    </div>
    
  );
}

export default App;
