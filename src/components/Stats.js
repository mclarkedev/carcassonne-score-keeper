import React from 'react';

const Stats = (props) => {
    const totalPlayers = props.players.length;
    
    // Gather total score between all players
    const totalPoints = props.players.reduce((totalScore, player) => {
        return totalScore + player.score;
    }, 0);

    return (
        <div className="stats">
            <div>
                <p>Players:  {totalPlayers}</p>
                <p>Total Points:  {totalPoints ? totalPoints : 0}</p>
            </div>
        </div>
    );
};

export default Stats;