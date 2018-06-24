import React from 'react'

const coin = (props) => {
  return (
    <div className="coin u-flex u-flex--center u-flex__item--center-h">
      {props.amount}
    </div>
  )
}

export default coin