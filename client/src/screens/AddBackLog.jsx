import React from 'react'
import { createBacklog } from '../services';
import {useState} from "react"

export default function AddBackLog(props) {
  let { consoles, games } = props
  const defaultInput = {
    game_id: "",
    console_id: "",
    done: false
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
    await createBacklog(input);
  }



  return (
    <div>
      <h1>This is the add backlog page</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Console</label>
        <select name="console_id" value ={input.console_id}>
          <option value="">Select a console</option>
          {consoles.map((console) => {
          return <option value={console.id}>{console.name}</option>
        })}</select>
        <br />
        <label>Game</label>
        <select name="game_id">
        <option value="">Select a game</option>
          {games.map((game) => {
          return <option value={game.id}>{game.title}</option>
          })}</select>
        <button>Add Backlog</button>
      </form>
    </div>
  )
}
