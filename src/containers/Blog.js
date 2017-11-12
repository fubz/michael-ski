import React from 'react'
import { getRouteProps, Router, Link } from 'react-static'
//
import FlexBox from 'flexbox-react'
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText, ListItemAvatar } from 'material-ui/List';
import PostIcon from 'material-ui-icons/LibraryBooks'
import ShareIcon from 'material-ui-icons/Share'
import Avatar from 'material-ui/Avatar/Avatar'
import IconButton from 'material-ui/IconButton/IconButton'
import ListItemSecondaryAction from 'material-ui/List/ListItemSecondaryAction'

const PostLink = ({id, title}) => (
  <Link to={`/blog/post/${id}/`} >
    <ListItem button>

      <ListItemAvatar>
        <Avatar>
          <PostIcon />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={title} />

      <ListItemSecondaryAction>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </Link>
)

const Blog = getRouteProps(({ classes, posts }) => (
  <FlexBox flexDirection="column" alignItems="center">
    <h1>Topics of Various Interest</h1>
    <br />
    <h3>All Topics:</h3>
    <List className={classes.list}>
      {posts.map(post => (
        <PostLink key={post.id} id={post.id} title={post.attributes.title} />
      ))}
    </List>
  </FlexBox>
))

const styles = theme => ({
  list: {
    width: 800,
    maxWidth: 800
  }
})

export default withStyles(styles)(Blog)
