import React from 'react'
import Team from './Team'

let Match = (props) => {
	return (
		<div className="match">
			{/* Date could be here */}
			<div className="match__inner">
				<Team position="left" teamId={props.match.homeTeam} />
				<Team position="right" teamId={props.match.awayTeam} />
			</div>
		</div>
	)
}

export default Match