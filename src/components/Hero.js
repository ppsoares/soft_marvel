import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import "./Hero.scss";
import Img from "./Img.png";

const styles = {
  card: {
    maxWidth: 1000
  },
  media: {
    height: 500
  },
  dense: {
    marginTop: 16
  }
};

const mapDispatchToProps = dispatch => ({
  getHeros: () => {
    fetch("")
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: "SET_HEROS",
          heros: response.data.results
        });
      })
      .catch(() => {
        dispatch({
          type: "SET_HEROS",
          heros: []
        });
      });
  }
});

const mapStateToProps = state => ({
  heros: state.heros,
  filter: state.filter,
  isGetting: false,
  hasGetError: false
});

class Hero extends Component {
  state = {
    isGetting: false,
    hasGetError: false,
    multiline: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount() {
    const { match } = this.props;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Hero">
        <div className="header">
          <h1>Edit Hero</h1>
        </div>

        <div className="container">
          <form>
            <fieldset>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Img}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Marcos
                    </Typography>
                    <Typography component="p">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Descrição Heroe"
                        multiline
                        value={this.state.multiline}
                        onChange={this.handleChange("multiline")}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Typography>
                    <button>
                      <Link to="/">Salvar</Link>
                    </button>
                    <button>
                      <Link to="/">Cancelar</Link>
                    </button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Hero));
