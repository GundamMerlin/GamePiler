import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(props) {
  const history = useHistory();
  
  const logout = async () => {
    await localStorage.clear();
    props.setToggle((prevState) => !prevState);
    history.push("/");
  };

  return (
    <div className = "NavBar">
      <Link to ="/backlogs">Home</Link>
      <Link to="/add-game">Add Game</Link>
      <Link to="/add-console">Add Console</Link>
      <Link to="/add-backlogs">Add Backlog</Link>
      <button onClick={logout}>Signout</button>
    </div>
  )
}
