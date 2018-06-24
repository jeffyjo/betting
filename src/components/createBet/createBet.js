import React from 'react'

import Team from '../matches/Team'
import Coin from './coin'

const createBet = (props) => {
	console.log('props', props.match.awayTeam)

	return (
		<div className="bet">
			<h1>Create Bet</h1>
			<div className="bet__top u-flex u-flex--space">
				<Team teamId={props.match.homeTeam}/>
				<Team teamId={props.match.awayTeam}/>
			</div>
			<div className="bet__middle">
			{/* Use form-group here */}
				<label>Question</label>
				<input type="text" />
			</div>
			<div className="bet__bottom">
				<div className="bet__bottom-block u-grid  u-grid--center u-grid--3-cols">
					<Coin  amount="1" />
					<Coin  amount="2" />
					<Coin  amount="5" />
				</div>
			</div>
		</div>
	)
}

export default createBet