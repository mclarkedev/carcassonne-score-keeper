import React, { Component } from 'react';

class AddPlayerForm extends Component {
    state = {
        name: '',
        color: ''
    };
    handleValueChange = (e) => {
        this.setState({ name: e.target.value });
    };
    handleSelectColor = (e) => {
        this.setState({ color: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state);
        this.setState({ name: '', color: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    required
                    type="text"
                    value={this.state.name}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"    
                />

                <select required name="color" id="colors" value={this.state.color} onChange={this.handleSelectColor}>
                    <optgroup label="Player Color">
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                    </optgroup>
                </select>

                <input
                    className="button" 
                    type="submit"
                    value="Add"
                />
            </form>
        );
    };
};

export default AddPlayerForm;