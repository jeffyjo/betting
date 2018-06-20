import React, { Component } from "react"

/* Style */
import './sass/style.css'

/* Components */ 
import Home from "./Home";

/* Data */
import TeamList from './TeamList'
import MatchList from './MatchList'

class App extends Component {
  constructor(){
	super()
	
	this.state = {
	  isLoggedIn : true,
	  user : {
		  name: "Jeff",
		  points: 1000
	  },
	  teams: TeamList,
	  matches: MatchList
	}
  }

  render (){
	return (
	  <div>
	 	{this.state.isLoggedIn 
		  ? <Home user={this.state.user} teams={this.state.teams} matches={this.state.matches} />
		  : <div className="container container__image container__image--login"> 
	 		  <div className="btn-container u-flex u-flex--space">
	 			<button className="btn">Signup</button>
	 			<button className="btn">Login</button>
	 		  </div>
			</div> }
	  </div>
	)
  }
}

export default App;
