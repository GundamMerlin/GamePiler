import React from 'react'
import { createGame } from './../services'
import { useState } from "react"
import NavBar from '../components/NavBar'

export default function AddGame() {
  const defaultInput = {
    title: "",
    cover_img: "",
    description: ""
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
    await createGame(input);
  }

  return (
    <div>
      <NavBar/>
      <h1>This is the add game and/or add to backlog page</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        name="title"
        type="text"
        value={input.title}
      ></input>
      <label>Box Art</label>
      <input
        name="cover_img"
        type="text"
        value={input.cover_img}
      >
      </input>
      <label>Game Description</label>
      <textarea
          rows="15"
          cols="30"
          type="text"
          name="description"
          placeholder=""
          value={input.description}
        />
        <button type="submit">Add Game</button>
      </form>
    </div>
  )
}
