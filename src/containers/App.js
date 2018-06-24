import React, { Component } from "react"

/* Style */
import '../sass/style.css'

/* Components */ 
import Login from '../components/login/login'
import Nav from '../components/Nav'
import Profile from '../components/profile/Profile'
import Bet from '../components/bet/Bet'
import Matches from '../components/matches/matches'
import CreateBet from '../components/createBet/createBet'

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
			matches: MatchList,
			site: 'CreateBet',
			currentBet : {id: 1, date: "", homeTeam: 20, awayTeam: 10}
		}

		this.onSiteChange = this.onSiteChange.bind(this)
		this.onCreateBet = this.onCreateBet.bind(this)

	}
	
	onSiteChange(site){
		this.setState({ site:site })
	}

	onCreateBet(match){
		this.setState({ currentBet: match })
		this.onSiteChange('CreateBet')
	}

	componentDidMount(){
		// let site = this.state.isLoggedIn ? 'Profile' : 'Login'
		// this.setState( {site: site} )
	}

	render (){
		let currentSite

		// Decide site
		switch (this.state.site){
			case 'Login':
				currentSite = <Login />
				break
			case 'Profile':
				currentSite = <Profile user={this.state.user}/>
				break
			case 'Bet':
				currentSite = <Bet teams={this.state.teams} 
												matches={this.state.matches}/>
				break
			case 'Matches':
				currentSite = <Matches teams={this.state.teams} 
												matches={this.state.matches} 
												click={this.onCreateBet}/>
				break
			case 'CreateBet':
				currentSite = <CreateBet match={this.state.currentBet} />
				break
			default:
				currentSite = <Profile user={this.state.user}/>
				break
		}

		// let wrapper = 
		// 	<div>
		// 		<div className="container__image container__image--home container__image--full-screen"></div>
		// 		{currentSite}
		// 	</div>

	return (
		<div>
			{currentSite}
			{/* {this.state.isLoggedIn 
				? null
				// ? <Home user={this.state.user} teams={this.state.teams} matches={this.state.matches} onCreateBet={this.onCreateBet} />
				: <Login /> } */}
			{this.state.isLoggedIn ? <Nav clicked={this.onSiteChange} /> : null}
		</div>
	)
	}
}

export default App;
