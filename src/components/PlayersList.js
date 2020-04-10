import React, { Component } from 'react';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class PlayersList extends Component {
    // handleScoreChange = (index, scoreChange) => {
    //     this.setState((prevState) => {
    //         // Create new copy of players array
    //         const updatedPlayersArrState = [ ...prevState.players ];
    //         // Create a new copy of the individual player object we are targeting
    //         const updatedPlayerObjState = { ...updatedPlayersArrState[index] };


    //         // Update target individual player's score
    //         updatedPlayerObjState.score += scoreChange;
    //         // Update the array of players with latest individual player's score
    //         updatedPlayersArrState[index] = updatedPlayerObjState;

    //         return {
    //             players: updatedPlayersArrState
    //         }
    //     });
    // };
    // handleAddPlayer = (name) => {
    //     let newPlayer = {
    //         name,
    //         score: 0,
    //         id: this.prevPlayerId += 1
    //     };
    //     this.setState((prevState) => ({
    //         players: prevState.players.concat(newPlayer)
    //     }));
    // };
    handleRemovePlayer = (id) => {
        this.setState((prevState) => ({
            players: prevState.players.filter((player) => {
                // Return new array of players not equal to the specific player passed in
                return player.id !== id 
            })
        }))
    };
    getHighScore = () => {
        const scores = this.props.players.map((player) => player.score);
        const highScore = Math.max(...scores);
        if (highScore) {
            return highScore;
        }
        return null;
    };

    render() {
    
    const highScore = this.getHighScore();
    const { players } = this.props

    return (
            <div className="players-list">
            {players.map((player, index) => 
                <Player 
                    key={player.id.toString()}
                    id={player.id}
                    name={player.name}
                    removePlayer={this.handleRemovePlayer}
                    score={player.score}
                    index={index}
                    changeScore={this.handleScoreChange}
                    isHighScore={highScore === player.score}
                />
            )}
            <AddPlayerForm addPlayer={this.handleAddPlayer}/>

            </div>
    )
    };
};

// export default PlayersList;