import React from 'react'
import BacklogCard from './BacklogCard'

export default function BackLogContainer(props) {
  return (
    <div>
      {props.backlogs.map((backlog) => {
        return <BacklogCard backlog={backlog} key={backlog.id} setToggle={props.setToggle} currentUser={props.currentUser}/>
      })}
    </div>
  )
}
