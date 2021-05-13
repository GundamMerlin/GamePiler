import React from 'react'
import { createGame } from './../services'
import { useState } from "react"
import { useHistory } from 'react-router-dom'
import "./AddGame.css"


export default function AddGame(props) {
  const {setToggle} = props
  const defaultInput = {
    title: "",
    cover_img: "",
    description: ""
  }
  const history = useHistory();
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
    setToggle(prevState =>!prevState)
    history.push("/backlogs")
  }

  return (
    <div className="add-game-container">
      <img src ="https://mystickermania.com/cdn/stickers/games/sticker_2951-512x512.png"></img>
      <h1>Add Game</h1>
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
