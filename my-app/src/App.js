import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Votes } from './components/Votes'
import { DisplayBoard } from './components/DisplayBoard'
import CreateVote from './components/CreateVote'
import { getAllVotes, createVote, resetAllVotes } from './services/VoteService'

class App extends Component {

  state = {
    vote: {},
    votes: [],
    numberOfVotes: 0
  }

  createVote = (e) => {
      createVote(this.state.vote)
        .then(response => {
          console.log(response);
          this.setState({numberOfVotes: this.state.numberOfVotes + 1})
      });
  }

  getAllVotes = () => {
    getAllVotes()
      .then(votes => {
        console.log(votes)
        this.setState({votes: votes, numberOfVotes: votes.length})
      });
  }

  resetAllVotes = () => {
    resetAllVotes()
      .then(votes => {
        console.log(votes)
        this.setState({votes: votes, numberOfVotes: votes.length})
      });
  }

  onChangeForm = (e) => {
      let vote = this.state.vote
      if (e.target.name === 'firstname') {
          vote.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          vote.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          vote.email = e.target.value;
      }
      this.setState({vote})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateVote 
                  vote={this.state.vote}
                  onChangeForm={this.onChangeForm}
                  createVote={this.createVote}
                  >
                </CreateVote>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfVotes={this.state.numberOfVotes}
                  getAllVotes={this.getAllVotes}
                  resetAllVotes={this.resetAllVotes}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Votes votes={this.state.votes}></Votes>
        </div>
      </div>
    );
  }
}

export default App;
