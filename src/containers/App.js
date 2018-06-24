import React, { Component } from "react"

/* Style */
import '../sass/style.css'

/* Components */ 
import Home from "./Home";
import Login from '../components/login/login'

/* Data */
import TeamList from '../TeamList'
import MatchList from '../MatchList'

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
	
	onCreateBet(){
		console.log('Bet created')
	}

	render (){
	return (
		<div>
			{this.state.isLoggedIn 
				? <Home user={this.state.user} teams={this.state.teams} matches={this.state.matches} onCreateBet={this.onCreateBet} />
				: <Login /> }
		</div>
	)
	}
}

export default App;
