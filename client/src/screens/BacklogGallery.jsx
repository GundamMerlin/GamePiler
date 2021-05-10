import React from 'react'
import { getAllBacklogs } from './../services'
import {useEffect, useState} from 'react' 
import BackLogContainer from '../components/BackLogContainer'




export default function BacklogGallery (props) {
  const [backlogs, setBacklogs] = useState([])
  
  useEffect(() => {
    fetchBacklogs();
  },[props.currentUser])

  const fetchBacklogs = async () => {
    const data = await getAllBacklogs();
    // console.log(data)
    setBacklogs(data)
  }

  return (
    <div>
      <BackLogContainer backlogs={backlogs}/>
    </div>
  )
}
