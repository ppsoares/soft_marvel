import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};


class CardGlyph extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Nome Heroi
          </Typography>
            <Typography component="p">
              Descrição do Heroi
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

CardGlyph.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardGlyph);