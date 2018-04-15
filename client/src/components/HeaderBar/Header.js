import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  width: '100vw',
  padding: '20px'
}

export default class Header extends Component {
  render() {
    return (
      <Paper style={styles}>
        <p>BOOMTOWN</p>
      </Paper>
    )
  }
}