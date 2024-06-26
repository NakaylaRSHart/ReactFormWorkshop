import { useState } from "react"

export default function Authenticate({token}) {
  
  const [successMessage, setSuccsessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async() => {
    try{
      const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
    const result = await response.json();
    setSuccsessMessage(result.message);
    }catch(error){
      setError(error.message);
    }
  }

  return (
    <div>
      <h3>Authenticate</h3>
        {successMessage && <p>{successMessage}</p>}

        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  )
}