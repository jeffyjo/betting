import React from 'react'
import ListItem from './ListItem'

const Nav = (props) => {
  return (
	<footer className="footer u-grid u-grid--center">
	  <ul className="footer__list u-flex u-flex--space">
		<ListItem action={props.click} name="Profile" />
		<ListItem action={props.click} name="Bet" />
		<ListItem action={props.click} name="Matches" />
	  </ul>
	</footer>
  )
}

export default Nav