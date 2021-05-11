import React from 'react'
import BacklogCard from './BacklogCard'
import './BackLogContainer.css'

export default function BackLogContainer(props) {
  return (
    <div className ="card-container">
      {props.backlogs.map((backlog) => {
        return <BacklogCard backlog={backlog} key={backlog.id} setToggle={props.setToggle} currentUser={props.currentUser} games={props.games}/>
      })}
    </div>
  )
}
