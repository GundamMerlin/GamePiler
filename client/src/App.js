import './App.css'
import { Route, Switch } from "react-router-dom";
import Landing from './screens/Landing';
import { getAllConsoles, getAllGames, verifyUser } from './services';
import {useState, useEffect} from 'react'
import BacklogGallery from './screens/BacklogGallery';
import GameDetails from './screens/GameDetails';
import EditGame from './screens/EditGame';
import AddGame from './screens/AddGame';
import AddConsole from './screens/AddConsole';
import NavBar from './components/NavBar';



function App() {
  
  const [games, setGames] = useState([])
  const [consoles, setConsoles] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const [toggle, setToggle]= useState(true)

  const fetchGames = async () => {
    const data = await getAllGames();
    setGames(data)
  }
  const fetchConsoles = async () => {
    const data = await getAllConsoles();
    setConsoles(data)
  }


  useEffect(() => {
    verify();
    fetchConsoles();
    fetchGames();
    

  },[toggle]);

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user)
  }

  const renderNavbar = () => {
    if (currentUser) {
      return (
        <div>
          <NavBar setToggle={setToggle}></NavBar>
        </div>
      )
    }
  }

  return (
    <div className="App">
      {renderNavbar()}
      <Switch>
        <Route exact path="/">
          <Landing verify={verify} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        </Route>
        <Route exact path ="/backlogs">
          <BacklogGallery currentUser={currentUser} games={games} setToggle={setToggle} toggle={toggle} consoles={consoles} />
        </Route>
        <Route exact path="/games/:id">
          <GameDetails games={games} currentUser={currentUser}/>
        </Route>
        <Route path="/edit-game">
          <EditGame currentUser={currentUser} games={games}/>
        </Route>
        <Route path="/add-game/">
          <AddGame currentUser={currentUser} setToggle={setToggle}/>
        </Route>
        <Route path="/add-console/">
          <AddConsole currentUser={currentUser} setToggle={setToggle}/>
        </Route>
     </Switch>
    </div>
  );
}

export default App;
