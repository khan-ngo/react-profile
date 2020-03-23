import React, { Component } from 'react';
import './App.css';
import Left from './components/left';
import Right from './components/right';

class App extends Component {
	render() {
		return (
          <div className="app">
            <Left
              name={this.props.profileData.name}
              profession={this.props.profileData.profession}
              twitterURL={this.props.profileData.twitterURL}
              instaURL={this.props.profileData.instaURL}
              githubURL={this.props.profileData.githubURL}
              linkedinURL={this.props.profileData.linkedinURL}
            />
            <Right
			intro={this.props.profileData.intro}
			myGoal={this.props.profileData.myGoal}
            />
          </div>

		);
	}
}

export default App;
