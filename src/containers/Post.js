import React from 'react'
import { getRouteProps, Link } from 'react-static'
import FlexBox from 'flexbox-react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import BackIcon from 'material-ui-icons/ArrowBack'

const Post = getRouteProps(({ classes, post: { attributes: {title, text} }}) => (
  <div>
    <Link to="/blog/">
      <Button className={classes.button} raised color="accent">
      <BackIcon className={classes.leftIcon} />
      Back
    </Button>
    </Link>
    <FlexBox flexDirection="column" alignItems="center">
      <h3>{title}</h3>
      <Paper className={classes.body}>
        {text}
      </Paper>
    </FlexBox>
  </div>
))

const styles = theme => ({
  body: {
    padding: '2em',
    maxWidth: '800px'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

export default withStyles(styles)(Post)