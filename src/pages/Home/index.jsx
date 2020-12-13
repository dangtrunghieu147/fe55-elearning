import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import CourseItem from "../../components/CourseItem";
import Header from "../../components/Header";
import styles from "./style";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Typography
          className={this.props.classes.title}
          component="h1"
          variant="h2"
        >
          Course List
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <CourseItem />
            </Grid>
            <Grid item xs={12} lg={4}>
              <CourseItem />
            </Grid>
            <Grid item xs={12} lg={4}>
              <CourseItem />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(Home);
