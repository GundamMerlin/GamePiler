import React from 'react'
import {useState} from 'react'
import { updateBacklog } from '../services';
import {Link} from 'react-router-dom'



export default function BacklogCard(props) {
  
  console.log(props)

  

  const handleChange = async (e) => {
    if (e.target.checked) {
      await updateBacklog(props.backlog.id, {done:true})
    } else {
      await updateBacklog(props.backlog.id, {done:false})
    }
    props.setToggle(prevState =>!prevState)
  };

  if (props.backlog.user_id === props.currentUser.id)
  return (
    
    <div className="backlog-card">
      <h1>{props.backlog.game.cover_img}</h1>
      <label>Complete?</label>
      <br></br>
      <input type="checkbox"
        name="done"
        value={props.backlog.done}
        checked={props.backlog.done}
        onChange={handleChange}
      >
      </input>
      <br></br>
      <Link to={`/games/${props.backlog.game.id}`}>Details</Link>
    </div>
  )
 }
