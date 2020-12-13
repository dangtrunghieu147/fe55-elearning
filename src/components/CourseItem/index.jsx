import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import styles from "./style";
import CourseImage from "../../assets/img/524990_1eb4_3.jpg";

//img: width:100%,height: 280px ,
//h5: text-align:center

class CourseItem extends Component {
  render() {
    const { img, center, btnDetail } = this.props.classes;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            className={img}
            image={CourseImage}
            title="Contemplative Reptile"
          />
          <CardContent className={center}>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={center}>
          <Button size="small" className={btnDetail}>
            Detail
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(CourseItem);
