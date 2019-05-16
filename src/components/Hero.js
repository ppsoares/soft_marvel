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
  getHeros: () => {}
});

const mapStateToProps = state => ({
  heros: state.heros,
  filter: state.filter,
  isGetting: false,
  hasGetError: false
});

class Hero extends Component {
  state = {
    multiline: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount() {
    const { match, heros } = this.props;

    console.log(heros);

    this.ids = match.params.id || 0;
  }

  render() {
    const { classes, heros } = this.props;

    const { id } = this.props.match.params;

    const dados = heros.find(hero => hero.id == id) || {
      name: "Não informado",
      path: "",
      extension: ""
    };
    console.log(dados);
    // debugger;

    return (
      <div className="app">
        <div className="header">
          <h1>Informações do Heroi</h1>
        </div>

        <div className={classes.card}>
          <form>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`${dados.thumbnail.path}.${dados.thumbnail.extension}`}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {dados.name}
                  </Typography>
                  <Typography component="p">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Descrição"
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
