import React, { Component } from 'react'
// import Match from '../components/Match'

class Matches extends Component {
	// constructor(props){
	// 	super(props)
	// }

	handleClick = (e) => {
		console.log('Click happened');
	}

	render(){
		return (
			<div className="matches">
			<h1>Matches</h1>
			<button onClick={(e) => this.handleClick(e)}>test</button>
			{/* Should be loop */}
			{/* {this.props.matches.map((match, i) => <Match match={match} key={i} />)} */}
		</div>
	)
}
}

export default Matches