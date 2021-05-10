import React from 'react'
import { createConsole } from './../services'
import { useState } from "react"

export default function AddGame() {
  const defaultInput = {
    name: "",
    console_img: ""
  }
  
  const [input, setInput] = useState(defaultInput)
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createConsole(input);
  }

  return (
    <div>
      <h1>This is add console</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        name="name"
        type="text"
        value={input.name}
      ></input>
      <label>Console Image</label>
      <input
        name="console_img"
        type="text"
        value={input.console_img}
      >
      </input>
        <button type="submit">Add Console</button>
      </form>
    </div>
  )
}
