import React from 'react'
import { useHistory } from 'react-router';
import { signInUser } from './../services';
import { useState } from 'react'


export default function SignIn(props) {
 
  const [input, setInput] = useState({
    email: "",
    password:""
  });
   const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signInUser(input);
    if (res.errors === "invalid") {
      alert("Invalid Credentials")
    } else {
      props.setCurrentUser(res)
      props.verify();
      return history.push("/backlogs")
    }
  };


  return (
    <div className = "signin-form">
      <h1 onClick = {props.handleContinue}>Continue?</h1>
      {!props.continueGame ? "" : <form className= "signin-form-inner" onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email"
          required />
        <label>Password</label>
        <input name="password" type="password"
          required />
        <button type="submit">Continue Game</button>
      </form>}
    </div>
  )
}
