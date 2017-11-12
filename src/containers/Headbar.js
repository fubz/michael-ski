import React from 'react'
import { Link } from 'react-static'
import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const NavLink = ({url, name}) => (
  <Button color="contrast">
    <Link to={url}>{name}</Link>
  </Button>
)

const Headbar = () => (
  <AppBar position="static">
    <Toolbar>
      <NavLink url="/" name="Home"/>
      <NavLink url="/about" name="About"/>
      <NavLink url="/blog" name="Blog"/>
    </Toolbar>
  </AppBar>
)

export default Headbar
