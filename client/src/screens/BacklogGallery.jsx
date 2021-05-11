import React from 'react'
import { getAllBacklogs } from './../services'
import {useEffect, useState} from 'react' 
import BackLogContainer from '../components/BackLogContainer'
import NavBar from '../components/NavBar'




export default function BacklogGallery (props) {
  const [backlogs, setBacklogs] = useState([])
  const [toggle, setToggle]= useState(true)
  
  useEffect(() => {
    fetchBacklogs();
  },[props.currentUser, toggle])

  const fetchBacklogs = async () => {
    const data = await getAllBacklogs();
    setBacklogs(data)
  }

  return (
    <div>
      <NavBar/>
      <BackLogContainer backlogs={backlogs} setToggle={setToggle} currentUser ={props.currentUser} />
    </div>
  )
}
