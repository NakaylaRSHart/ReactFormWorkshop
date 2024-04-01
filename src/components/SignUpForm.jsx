import React, { useState } from "react";

export default function SignUpForm({token, setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({
          username: username,
          password: password
        }),
      }
    });

    const result = await response.json();
    setToken(result.token);

    } catch(error){
      console.log(error.message);
    }
  }


  return (
    <>
      <h2 id="signUpHeader">Sign Up!</h2>
      {error && <p>{error}</p>}

      <form id="userInputForm" onSubmit={handleSubmit}>
        <label id="entryBox">
          Username: 
          <input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>

        <label id="entryBox">
          Password: 
          <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}


