import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="a">
              News
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Sign up</Button>
            <Button color="inherit">Log in</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
