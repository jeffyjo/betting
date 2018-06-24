import React from 'react'

const ListItem = (props) => {
  return(
    <li className="list-item" onClick={() => props.action(props.name)}>
      <button className="list-item__button">
        {props.name === 'Profile' ? <i className="fas fa-user"></i> 
        : ( props.name === 'Bet' ? <i className="fas fa-money-bill"></i> 
        : <i className="fas fa-futbol"></i> )}
      </button>
    </li>
  )
}

export default ListItem