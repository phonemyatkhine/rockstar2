import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


function Header(props) {

    return (
      <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="inherit">
            {props.status} List ({props.count})
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default Header;
