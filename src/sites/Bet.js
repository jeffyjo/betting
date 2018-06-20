import React, { Component } from 'react'
import BetItem from '../components/BetItem'

const Bet = (props) => {

  return(
	<div>
		<h1>Bet</h1>
		{/* Should be loop */}
		{/* {props.matches.map((match, i) => <BetItem match={match} key={i} /> )} */}
	</div>
  )
}

export default Bet