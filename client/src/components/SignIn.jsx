import React from 'react'
import { useHistory } from 'react-router';
import { signInUser } from '../auth';
import { useState } from 'react'


export default function SignIn(props) {
  let defaultInput = {
    email: "",
    password: "",
  };

  const [input, setInput] = useState(defaultInput);
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
    await signInUser(input);
    props.verify();
  };


  return (
    <div>
      <h1>THIS IS THE SIGN IN FORM</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <label>Password</label>
        <input name="password" type="password" />
        <button type="submit">Continue Game</button>
      </form>
    </div>
  )
}