import React from "react";
import './Main.css';
import GuessSection from './guessSection';
import StatusSection from './statusSection';

export class Main extends React.Component {
    constructor(props) {
        super();
        
      this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
    }
    
    makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    }
    render(){
        const { feedback, guesses } = this.state;
        const guessCount = guesses.length;

        return(
            <div className= "main">
                <GuessSection
                feedback={feedback}
                guessCount={guessCount}
                onMakeGuess={guess => this.makeGuess(guess)}
                />
            <StatusSection guesses={guesses}/>
            </div>    
        );
    }
}