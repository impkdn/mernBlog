import { useState } from "react";

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
   async function logMeIn(e) {
        e.preventDefault();
        await fetch('http://localhost:4000/login', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {'Content-Type': 'application/json'}
        });
        console.log("Hi")
    }
    return(
        <div>
            <h1 id="header">HI i am Log In!!!!
            </h1>
                    <form name="logInForm" onSubmit={logMeIn}>
        <div>

          <span>
            <label for="userName">User Name</label>
            <input 
            type="text" 
            placeholder="userName" 
            value={username} 
            onChange={e => setUserName ( e.target.value)} />
            
          </span>
          <span>
            <label for="userPswd">Password</label>
            <input 
            type="password" 
            placeholder="userPswd" 
            id="userPswd"
            value={password}
            onChange={e => setPassword(e.target.value)} />
            
          </span>
          <span>
            <input type="submit" value="Log Me In" />
            
          </span>
        </div>
      </form>
      </div>

    )
}
export default Login;