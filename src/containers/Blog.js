import React from 'react'
import { getRouteProps, Router, Link } from 'react-static'
//
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText, ListItemAvatar } from 'material-ui/List';
import PostIcon from 'material-ui-icons/LibraryBooks'
import ShareIcon from 'material-ui-icons/Share'
import Avatar from 'material-ui/es/Avatar/Avatar'
import IconButton from 'material-ui/es/IconButton/IconButton'
import ListItemSecondaryAction from 'material-ui/es/List/ListItemSecondaryAction'
import Button from 'material-ui/es/Button/Button'

const handleClick = (event) => {
  console.log('hc', event.target)

}

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

export default getRouteProps(({ posts }) => (
  <div>
    <h1>Topics of Various Interest</h1>
    <br />
    All Topics:
    <List>
      {posts.map(post => (
        <PostLink key={post.id} id={post.id} title={post.attributes.title} />
      ))}
    </List>
  </div>
))
