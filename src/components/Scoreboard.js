import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
import uuid from "uuid";

class Scoreboard extends Component {
    state = {
        players: []
    };

    handleScoreChange = (index, scoreChange) => {
        this.setState((prevState) => {
            // Create new copy of players array
            const updatedPlayersArrState = [ ...prevState.players ];
            // Create a new copy of the individual player object we are targeting
            const updatedPlayerObjState = { ...updatedPlayersArrState[index] };


            // Update target individual player's score
            updatedPlayerObjState.score += scoreChange;
            // Update the array of players with latest individual player's score
            updatedPlayersArrState[index] = updatedPlayerObjState;

            return {
                players: updatedPlayersArrState
            }
        });
    };
    handleAddPlayer = (addPlayerFormState) => {
        const { name, color} = addPlayerFormState;
        let newPlayer = {
            name,
            score: 0,
            color,
            id: uuid()
        };
        this.setState((prevState) => ({
            players: prevState.players.concat(newPlayer)
        }));
    };
    handleRemovePlayer = (id) => {
        this.setState((prevState) => ({
            players: prevState.players.filter((player) => {
                // Return new array of players not equal to the specific player passed in
                return player.id !== id 
            })
        }))
    };
    getHighScore = () => {
        const scores = this.state.players.map((player) => player.score);
        const highScore = Math.max(...scores);
        if (highScore) {
            return highScore;
        }
        return null;
    }
    handleStartNewGame = () => {
        this.setState({ players: [] });
    }

    render() {
        const highScore = this.getHighScore();

        return (
                <div className="scoreboard">
                    <Header players={this.state.players} />
                    <main>
                        <section className="players-list">
                            {this.state.players.map((player, index) => 
                                <Player 
                                    key={player.id.toString()}
                                    id={player.id}
                                    name={player.name}
                                    color={player.color}
                                    removePlayer={this.handleRemovePlayer}
                                    score={player.score}
                                    index={index}
                                    changeScore={this.handleScoreChange}
                                    isHighScore={highScore === player.score}
                                />
                            )}
                        </section>
                        <AddPlayerForm addPlayer={this.handleAddPlayer} color={this.state.color} />
                    </main>
                    <footer>
                        <button 
                            onClick={this.handleStartNewGame}
                            className="new-game"
                            disabled={!this.state.players[0]}
                        >Start New Game</button>
                    </footer>
                </div>
        );
    }
};

export default Scoreboard;

