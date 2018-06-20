import React, { Component } from 'react'
// import FormGroup from '../components/FormGroup'

class Profile extends Component {
	constructor(props){
		super(props)

		this.state = {
			user: props.user
		}
	}
	
  render(){
	return(
		<div className="container container--home">
			<h1>Hello, {this.state.user.name}</h1>
			<h2>You have {this.state.user.points} points.</h2>
		</div>
	)
  }
}

export default Profile