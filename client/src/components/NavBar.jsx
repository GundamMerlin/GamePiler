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
    <div className="NavBar">
      <div id="hidden">"blastoise"
        <img id="blastoise" src="https://raw.githubusercontent.com/GundamMerlin/GamePiler/main/assets/Blastoise.png"></img></div>
      <Link to ="/backlogs"><button>Home</button></Link>
      <Link to="/add-game"><button>Add Game</button></Link>
      <Link to="/add-console"><button>Add Console</button></Link>
      <button onClick={logout}>Signout</button>
    </div>
  )
}
