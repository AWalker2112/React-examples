


import { useState } from 'react';
import AddGamers from './AddGamers';
import GameRoom from './GameRoom';

const Game = () => {

    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    const newPlayer = ({ target }) => {
        setPlayerName(target.value)

    }

    const submitForm = (event) => {
        // Prevent form submission
        event.preventDefault();
        // console.log(event.target[0].value);
        setPlayers(players => [...players, playerName]);
        event.target[0].value = "";
    }


    return (
        <>
            <AddGamers submitHandler={submitForm} newPlayer={newPlayer} />
            <GameRoom players={players} />
        </>
    )
}
export default Game;