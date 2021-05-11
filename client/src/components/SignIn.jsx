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
    console.log(res)
    if (res.errors === "invalid") {
      alert("Invalid Credentials")
    } else {
      props.setCurrentUser(res)
      props.verify();
      history.push("/backlogs")
    }
  };


  return (
    <div className = "signin-form">
      <h1>THIS IS THE SIGN IN FORM</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email"
        required/>
        <label>Password</label>
        <input name="password" type="password"
        required/>
        <button type="submit">Continue Game</button>
      </form>
    </div>
  )
}
