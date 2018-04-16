import React from 'react';
import './guessForm.css';

export class GuessForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
     if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
    }
    
    render(){
        return(
            <form>
            <input type="number" id="playerGuess" ref={input => (this.input = input)} required></input>
            <button type="submit" id="guessButton" className="button"> Guess </button>
            </form>
            
            
            );
    }
}