import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from './screens/Landing';
import { verifyUser } from './services';
import {useState, useEffect} from 'react'
import BacklogGallery from './screens/BacklogGallery';
import GameDetails from './screens/GameDetails';
import EditGame from './screens/EditGame';
import AddGame from './screens/AddGame';
import AddConsole from './screens/AddConsole';



function App() {
  // const [backlog, setBacklog] = useState([])
  // const [game, setGame] = useState([])
  // const [console, setConsole] = useState([])
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    verify();
  },[]);

  const verify = async () => {
    let user = await verifyUser();
    setCurrentUser(user)
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing verify={verify}/>
        </Route>
        <Route exact path ="/backlogs">
          <BacklogGallery currentUser={currentUser}/>
        </Route>
        <Route path="/game-details/:id">
          <GameDetails />
        </Route>
        <Route path="/edit-game">
          <EditGame  />
        </Route>
        <Route path="/add-game/:id">
          <AddGame />
        </Route>
        <Route path="/add-console/:id">
          <AddConsole />
        </Route>
        
     </Switch>
    </div>
  );
}

export default App;
