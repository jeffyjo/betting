import React from 'react'
import Match from './match'

const matches = (props) => {
	return (
		<div className="matches">
			<h1>Matches</h1>
			{props.matches.map((match, i) => <Match match={match} key={i} click={props.click} />)}
		</div>
	)

}

export default matches