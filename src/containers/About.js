import React from 'react'
import FlexBox from 'flexbox-react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'

const About = ({classes}) => (
  <FlexBox flexDirection="column" alignItems="center">
    <h1>This is what I'm all about.</h1>
    <Paper className={classes.body}>
      React, programming, understanding the universe, and the sense of purpose.
    </Paper>
  </FlexBox>
)

const styles = theme => ({
  body: {
    padding: '2em'
  }
})

export default withStyles(styles)(About)
