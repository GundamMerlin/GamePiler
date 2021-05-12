import React from 'react'
import { useParams } from 'react-router'
import { getGame } from '../services';
import { useState, useEffect } from 'react'
import './GameDetails.css'

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    fetchGame();
  }, []);
  
  const fetchGame = async () => {
    const game = await getGame(id);
    setGame(game);
  };
  
  return (
    
    <div className="details-container">
      <div className="game-details">
        <h1>{game.title}</h1>
        <img className="details-cover" src={game.cover_img} alt={game.title}/>
        <br></br>
        <label>Description</label>
        <p>{game.description}</p>
      </div>
    </div>
    
  )
}
