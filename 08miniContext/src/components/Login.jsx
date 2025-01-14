// Here, we will see how data gets sent, so useState, useContext is imported.

import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // at first, we created the context using createContext in UserContext.js
    // Then, we made a wrapper that makes sure that any children passed has the data that we define in UserContextProvider.jsx
    // Remember, we defined a useState hook in UserContextProvider and provided null default value in user, useUser is that
    // we extracted that setUser method from UserContext, and since we are using conte
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        {"  "}
        <input type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
