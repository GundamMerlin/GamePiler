import React from 'react'
import { getAllBacklogs } from './../services'
import {useEffect, useState} from 'react' 
import BackLogContainer from '../components/BackLogContainer'
import NavBar from '../components/NavBar'




export default function BacklogGallery (props) {
  const [backlogs, setBacklogs] = useState([])
  
  
  useEffect(() => {
    fetchBacklogs();
  },[props.currentUser, props.toggle])

  const fetchBacklogs = async () => {
    const data = await getAllBacklogs();
    setBacklogs(data)
  }

  return (
    <div>
      <BackLogContainer backlogs={backlogs} setToggle={props.setToggle} currentUser ={props.currentUser} />
    </div>
  )
}
