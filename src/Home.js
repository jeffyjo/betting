import React, { Component } from 'react'

import Nav from './components/Nav'
import Profile from './sites/Profile'
import Bet from './sites/Bet'
import Matches from './sites/Matches'
import CreateBet from './components/CreateBet'

class Home extends Component {
  constructor(props){
	super(props)

	// Should be Profile
	this.state = {
		site: "Matches",
		isOpen: false
	}

	this.onSiteChange = this.onSiteChange.bind(this)
	// this.onCreateBet = this.onCreateBet.bind(this)
	// this.toggleModal = this.toggleModal.bind(this)
  }

  onSiteChange(site){
	this.setState({ site:site })
  }

  onCreateBet(e){
	// this.setState({ site: 'CreateBet' })
	console.log(this.state, e)
  }

//   toggleModal() {
// 	this.setState({
// 	  isOpen: !this.state.isOpen
// 	})
//   }

  render(){
	return (
	  <div>
		<button onClick={this.toggleModal}>
		  Open the modal
		</button>

		{/* <Modal show={this.state.isOpen}
		  onClose={this.toggleModal}>
		  Here's some content for the modal
		</Modal> */}

		<div className="container__image container__image--home container__image--full-screen"></div>
		{this.state.site === "Profile" ? <Profile user={this.props.user} /> : 
			( this.state.site === "Bet" ? <Bet teams={this.props.teams} matches={this.props.matches} /> : 
			( this.state.site === "Matches" ? <Matches teams={this.props.teams} matches={this.props.matches} action={this.onSiteChange} /> :
			<CreateBet matches={this.props.matches} /> ))
		}
		<Nav click={this.onSiteChange} />
	  </div>
	)
  }
}

export default Home