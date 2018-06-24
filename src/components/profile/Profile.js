import React from 'react'
// import FormGroup from '../components/FormGroup'

const Profile = (props) => {
	return(
		<div className="container container--home">
			<h1>Hello, {props.user.name}</h1>
			<h2>You have {props.user.points} points.</h2>
		</div>
	)
}

export default Profile