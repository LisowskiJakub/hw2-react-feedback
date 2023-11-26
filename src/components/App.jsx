
import React, { Component } from "react";
import { FeedbackButtons } from "./FeedbackButtons/FeedbackButtons";
import { FeedbackStat } from "./FeedbackStat/FeedbackStat";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = (evt) => {
    console.log(evt);
    if (evt === 'good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (evt === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
    if (evt === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  }

  totalCounter = () => this.state.good + this.state.neutral + this.state.bad

  render() {
    return (<div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>

      <FeedbackButtons options={['good', 'neutral', 'bad']} feedbackCB={this.handleFeedback}>
      </FeedbackButtons>

      {this.totalCounter() > 0 ? (<FeedbackStat
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.totalCounter()} />) : (<h2>No feedback given</h2>)}
    </div>)
  }
};