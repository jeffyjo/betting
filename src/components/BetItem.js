import React from 'react'
import Team from './Team'

const BetItem = (props) => {
	const homeTeamBetId = `${props.match.id}-1`
	const drawBetId = `${props.match.id}-x`
	const awayTeamBetId = `${props.match.id}-2`

	return (
		<div className="bet-item">
			<div className="bet-item__inner">
				{/* <label htmlFor={homeTeamBetId}> */}
					{/* <input type="checkbox" id={homeTeamBetId} /> */}
					<Team position="left" teamId={props.match.homeTeam} />
					<Team position="right" teamId={props.match.awayTeam} />
				{/* </label> */}
				{/* <button>A</button> */}
				{/* <Team position="right" teamId={props.match.awayTeam} /> */}
			</div>
		</div>
	)
}

export default BetItem