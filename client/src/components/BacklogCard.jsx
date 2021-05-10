import React from 'react'
import {useState} from 'react'
import { updateBacklog } from '../services';



export default function BacklogCard(props) {
  
  // const [done, setDone] = useState(false);

  

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
    
    <div>
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
    </div>
  )
 }
