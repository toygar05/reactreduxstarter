import React from "react";
import ReactDOM from "react-dom"
import { connect } from "react-redux"

import UserList from './UserList.js'
import { setText } from '../actions/UserActions'

@connect((store) => {
    console.log('CONNECT,',store.user)
  return {
    text: store.user.text
  }
})

export default class Main extends React.Component{
    componentWillMount() {

    }

    _handleClick = (event) => {
        this.props.dispatch(setText('clicked'));
    }
  render(){
    return (
      <div>
      <UserList />
      <button onClick={this._handleClick}> Hey</button>
      {this.props.text}
      </div>
    )
  }
}
