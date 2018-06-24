import React from 'react'
import Team from './Team'

let match = (props) => {
	return (
		<button className="match" onClick={() => props.click(props.match)}>
			{/* Date could be here */}
			<div className="match__inner">
				<Team position="left" teamId={props.match.homeTeam} />
				<Team position="right" teamId={props.match.awayTeam} />
			</div>
		</button>
	)
}

export default match