import React from 'react'
import { signInUser, signUpUser } from './../services';
import { useState } from 'react'
import {useHistory} from 'react-router-dom'



export default function SignUp(props) {
  const [input, setInput] = useState({
    email: "",
    password: "",
    password_confirmation: ""
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
    let res = await signUpUser(input);
    props.setCurrentUser(res)
    // history.push("/add-backlogs")
    if (props.currentUser) {
      history.push("/add-backlogs")
    } else {
      alert("must sign up")
    }
  }

  return (
    <div className ="Signup-form">
      <h1>THIS IS THE SIGN UP FORM</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={input.email}
          />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={input.password}
          />
        <label>Password Confirmation</label>
        <input
          name="password_confirmation"
          type="password"
          value={input.password_confirmation}
          />
        <button type="submit">New Game</button>
      </form>
    </div>
  )
}
