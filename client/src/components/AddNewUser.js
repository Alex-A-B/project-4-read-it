import { useState } from "react"

function AddNewUser ( { onAddUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const formValues = {
        username: username,
        password: password,
     }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        })
          .then((response) => {
              if (response.ok) {
                  response.json()
          .then((newUser) => onAddUser(newUser))
          .catch((error) => console.log(error))
          setUsername("")
          setPassword("")
              }
            })
      }

    return (
        <div>
            <h5>Create a new user:</h5>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
               value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Choose a username"
                required
            />
            <label htmlFor="password">Password: </label>
            <input
               value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Choose a password"
                type="password"
                required
            />
            <button type="submit">Create User</button>
            </form>
        </div>
        )
        
}

export default AddNewUser