import React, { PureComponent } from 'react';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
    render() {
        const { name, id, color, score, index, removePlayer, changeScore } = this.props;
        return (
            <section className="player">
                <div className={`player-name ${color}`}>
                    <button
                        aria-label="Remove Player" 
                        className="remove-player" 
                        onClick={ () => removePlayer(id) }
                    >&times;</button>
                    <Icon isHighScore={this.props.isHighScore} />
                    <p>{name}</p>
                </div>
    
                <Counter 
                    score={score ? score : 0}
                    index={index}
                    changeScore={changeScore}
                />
            </section>
        );
    }
};

export default Player;