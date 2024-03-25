import {  useState } from "react";
function LogIn() {
  const[ userName, setUserName] = useState('');
  const[ passWord, setPassWord] = useState('');

 async function registerUser(ev) {
    ev.preventDefault();
   await fetch('http://localhost:4000/login', {
      method : 'POST',
      body: JSON.stringify({userName, passWord}),
      headers: {'Content-Type': 'application/json'}
    })

  }

    return (
        <div>

        <h1 id="header">HI i am Log In!!!!</h1>
    <div class="logIn" id="info">
      <form action="#">
        <div>

          <span>
            <label for="userName">User Name</label>
            <input type="email" name="userName" />
            
          </span>
          <span>
            <label for="userPswd">Password</label>
            <input type="password" name="userPswd" id="userPswd" />
            
          </span>
          <span>
            <input type="button" value="Log Me In" />
            
          </span>
        </div>
      </form>
      <p>Or you can sign up now</p>
      <form  name="logInForm" onSubmit={registerUser}>
        {/* <div id="userFirstName">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
          <span class="errorMsg"></span>
        </div> */}
        
        {/* <label for="middleName">Middle Name</label>
        <input type="text" name="middleName" />
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" /> <br /> */}
        <label for="userEmail">Email</label>
        <input 
        type="email" 
        name="userEmail" 
        id=""
        value={userName}
        onChange={ev => setUserName ( ev.target.value)} 
        
        /> <br />
        {/* <!-- <label for="userGender">Gender</label> --> */}
        {/* <!-- <input type="checkbox" name="userGender" id=""> */}
        {/* <label for="userGender">Gender</label> --> */}
        {/* <input type="radio" name="userGenderMale" id="" value="MALE" />
        <label for="userGenderMale">Male</label>
        <input type="radio" name="userGenderFeMale" id="" value="FEMALE" />
        <label for="userGenderFeMale">Fe Male</label> <br />
        <label for="userPsw">Password</label> */}
        <input
         type="password" 
         name="userPsw" 
         id="userPsw"
         value={passWord}
        onChange={ev => setPassWord ( ev.target.value)} 
         />
        <input type="submit" value="Submit" name="submitBtn" />
      </form>
    </div>
    {/* <script>
      document.getElementById("header").innerHTML = "Hi i am from script"


    </script>

    <script src="../js/logIn.js"></script> */}
        </div>
    );
}

export default LogIn;