import React from 'react'
import ListItem from './ListItem'

const Nav = (props) => {
  return (
  <footer className="footer u-grid u-grid--center">
	  <ul className="footer__list u-flex u-flex--space">
		<ListItem action={props.clicked} name="Profile" />
		<ListItem action={props.clicked} name="Bet" />
		<ListItem action={props.clicked} name="Matches" />
	  </ul>
	</footer>
  )
}

export default Nav