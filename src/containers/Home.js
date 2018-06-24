import React, { Component } from 'react'

import Nav from '../components/Nav'
import Profile from '../components/profile/Profile'
import Bet from '../components/bet/Bet'
import Matches from '../components/matches/matches'
import Test from '../components/matches/test'

class Home extends Component {
	constructor(props){
    super(props)

		// Should be Profile
		this.state = {
			site: "Matches",
			isOpen: false
		}

		this.onSiteChange = this.onSiteChange.bind(this)
		this.onCreateBet = this.onCreateBet.bind(this)
	}

	onSiteChange(site){
		this.setState({ site:site })
	}

	onCreateBet(){
		// this.setState({ site: 'CreateBet' })
		// this.setState({ site: 'Matches' })
		console.log(this.state)
	}

	render(){

		let currentSite
		
		// Decide site
		switch (this.state.site){
			case 'Profile':
				currentSite = <Profile user={this.props.user}/>
				break
			case 'Bet':
				currentSite = <Bet teams={this.props.teams} 
												matches={this.props.matches}/>
				break
			case 'Matches':
				currentSite = <Matches teams={this.props.teams} 
												matches={this.props.matches} 
                        click={this.props.onCreateBet}/>
				break
			default:
				currentSite = <Profile user={this.props.user}/>
				break
		}

	return (
			<div>
				<div className="container__image container__image--home container__image--full-screen"></div>
          <Test click={this.props.onCreateBet}/>
          {currentSite}
					<Nav clicked={this.onSiteChange} />
			</div>
		)
	}
}

export default Home