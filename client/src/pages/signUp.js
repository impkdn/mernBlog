import {  useState } from "react";
function SignUp() {
  const[ username, setUserName] = useState('');
  const[ password, setPassWord] = useState('');

 async function registerUser(ev) {
    ev.preventDefault();
   await fetch('http://localhost:4000/signup', {
      method : 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
    })

  }

    return (
        <div>

        <h1 id="header">HI i am Sign Up!!!!</h1>
    <div class="signUp" id="info">

      
      
      {/* <form action="#">
        <div>

          <span>
            <label for="userName">User Name</label>
            <input type="text" name="userName" />
            
          </span>
          <span>
            <label for="userPswd">Password</label>
            <input type="password" name="userPswd" id="userPswd" />
            
          </span>
          <span>
            <input type="button" value="Log Me In" />
            
          </span>
        </div>
      </form> */}

      
      <p>Or you can sign up now</p>
      <form  name="signUpForm" onSubmit={registerUser}>
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
        type="text" 
        name="userEmail" 
        id=""
        value={username}
        onChange={ev => setUserName ( ev.target.value)} 
        
        /> <br />
        {/* <!-- <label for="userGender">Gender</label> --> */}
        {/* <!-- <input type="checkbox" name="userGender" id=""> */}
        {/* <label for="userGender">Gender</label> --> */}
        {/* <input type="radio" name="userGenderMale" id="" value="MALE" />
        <label for="userGenderMale">Male</label>
        <input type="radio" name="userGenderFeMale" id="" value="FEMALE" />
        <label for="userGenderFeMale">Fe Male</label>*/} <br />
        <label for="userPsw">Password</label> 
        <input
         type="password" 
         name="userPsw" 
         id="userPsw"
         value={password}
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

export default SignUp;