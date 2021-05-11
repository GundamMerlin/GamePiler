import React from 'react'
import { deleteBacklog, updateBacklog } from '../services';
import { Link } from 'react-router-dom'
import {useHistory} from "react-router-dom"




export default function BacklogCard(props) {
  
  const history = useHistory();
  

  const handleDelete = async () => {
    await deleteBacklog(props.backlog.id);
    props.setToggle((prevState) => !prevState);
    history.push("/backlogs")
  }


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
      <img src={props.backlog.game.cover_img} alt={props.backlog.game.title}/>
      <label>Complete?</label>
      <br></br>
      <input type="checkbox"
        name="done"
        value={props.backlog.done}
        checked={props.backlog.done}
        onChange={handleChange}
      >
      </input>
      <button onClick={handleDelete}>Delete Save</button>
      <br></br>
      <Link to={`/games/${props.backlog.game.id}`}>Details</Link>
    </div>
  )
 }
