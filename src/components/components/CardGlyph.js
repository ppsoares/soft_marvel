import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    marginTop: "15px"
  },
  media: {
    height: 140
  }
};

class CardGlyph extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.props.imagem}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.nome}
            </Typography>
            <Typography component="p">{this.props.descricao}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

CardGlyph.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardGlyph);
