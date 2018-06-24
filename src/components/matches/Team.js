import React from 'react'
import { getTeam } from '../../Util'

const Team = (props) => {

	const team = getTeam(props.teamId)

	return (
		<div className="team u-flex u-flex--row u-flex--center-v" >
			<img src={team.flagPicture} className="team__item" alt={team.name} />
			<p className="team__item">{team.name}</p>
		</div>
	)
}

export default Team