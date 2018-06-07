import React, { Component } from 'react';
import TextInputControl from './TextInputControl'
import EditTextDisplay from './EditTextDisplay'
import MessageList from './MessageList'

class SomethingSmall extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <TextInputControl />
        <EditTextDisplay />
        <MessageList />
      </div>
    )
  }
}

import { connect } from 'react-redux'
import {

} from '../actions/index'

const mapStateToProps = (state, ownProps) => {

  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

SomethingSmall = connect(
  mapStateToProps,
  mapDispatchToProps
)(SomethingSmall)

export default SomethingSmall
