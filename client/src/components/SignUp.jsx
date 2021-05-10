import React from 'react'
import { signUpUser } from './../services';
import { useState } from 'react'



export default function SignUp() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signUpUser(input);
  }

  return (
    <div className ="Signup-form">
      <h1>THIS IS THE SIGN UP FORM</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          required/>
        <label>Password</label>
        <input
          name="password"
          type="password"
          required/>
        <label>Password Confirmation</label>
        <input
          name="password_confirmation"
          type="password"
          required/>
        <button type="submit">New Game</button>
      </form>
    </div>
  )
}
