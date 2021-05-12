import React from 'react'
import { getAllBacklogs } from '../services'
import {useEffect, useState} from 'react' 
import BackLogContainer from '../components/BackLogContainer'
import "./BackLogGallery.css"
import AddBackLog from './AddBackLog'


export default function BacklogGallery (props) {
  const [backlogs, setBacklogs] = useState([])
  const { games, consoles, currentUser, setToggle } = props
  
  
  useEffect(() => {
    fetchBacklogs();
  },[props.currentUser, props.toggle])

  const fetchBacklogs = async () => {
    const data = await getAllBacklogs();
    setBacklogs(data)
  }

  return (
  
    <div className="backlog-gallery">
      <AddBackLog games={games} consoles={consoles} currentUser={currentUser} setToggle={setToggle}/>
      <BackLogContainer backlogs={backlogs} setToggle={props.setToggle} currentUser ={props.currentUser} />
    </div>
  )
}
