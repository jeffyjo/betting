import React, { Component } from 'react'

class Test extends Component {
  constructor(props){
    super(props)
    console.log('props', props)
  }

  render(){
      return (
        <div>
        <button onClick={() => this.props.click()}>TEST</button>
      </div>
    )
  }
}

export default Test