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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

import "./Hero.scss";

import * as heroActions from "../../Store/hero/actions";

const styles = {
  card: {
    maxWidth: 1000,
    margin: "15px auto 0"
  },
  media: {
    height: 500
  },
  dense: {
    marginTop: 16
  },
  fab: {}
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

  clickIncluir = (e, mass) => {
    this.props.dispatch(heroActions.incluirSerie(e, mass));

    this.heros = mass;

    this.setState({
      heros: mass,
      multiline: ""
    });
  };

  incluirSerie(e, mass) {
    const Arr = mass.series.items;
    Arr.push({
      name: e,
      resourceURI: "Pedro URL"
    });

    this.setState({
      heros: mass,
      multiline: ""
    });
  }

  retirarSerie(item, mass) {
    const Arr = mass.series.items;

    for (var i = 0; i < Arr.length; i++) {
      if (Arr[i].name === item) {
        Arr.splice(i, 1);
      }
    }

    this.heros = mass;

    this.setState({
      heros: mass
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount() {
    const { match } = this.props;

    this.ids = match.params.id || 0;
  }

  render() {
    const { classes, heros } = this.props;

    const { id } = this.props.match.params;

    const dados = heros.find(hero => hero.id == id) || {
      name: "Não informado",
      path: "",
      extension: "",
      description: "teste descricao",
      series: {
        items: [
          { name: "teste objeto 1" },
          { name: "teste objeto 2" },
          { name: "teste objeto 3" }
        ]
      }
    };

    return (
      <div className="app">
        <div className="header">
          <h1>Informações do Heroi</h1>
        </div>

        <div className={classes.card}>
          <form>
            <Card className={classes.card}>
              <CardActionArea>
                {dados.thumbnail && (
                  <CardMedia
                    className={classes.media}
                    image={`${dados.thumbnail.path}.${
                      dados.thumbnail.extension
                    }`}
                    title="Contemplative Reptile"
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {dados.name}
                  </Typography>
                  <Typography>
                    <TextField
                      id="standard-multiline-flexible"
                      label="Nova serie"
                      multiline
                      rowsMax="1"
                      value={this.state.multiline}
                      onChange={this.handleChange("multiline")}
                      className={classes.textField}
                      margin="normal"
                    />
                    <Icon
                      onClick={() =>
                        this.incluirSerie(this.state.multiline, dados)
                      }
                    >
                      +
                    </Icon>
                  </Typography>
                  <Typography component="p">
                    <List className={classes.root}>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          primary="Series:"
                          secondary={
                            <React.Fragment>
                              {dados.series.items.map(value => (
                                <ListItem
                                  key={value}
                                  role={undefined}
                                  dense
                                  button
                                >
                                  <ListItemText primary={value.name} />
                                  <Fab
                                    color="inherit"
                                    aria-label="Edit"
                                    className={classes.fab}
                                  >
                                    <Icon
                                      onClick={() =>
                                        this.retirarSerie(value.name, dados)
                                      }
                                    >
                                      -
                                    </Icon>
                                  </Fab>
                                </ListItem>
                              ))}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </Typography>
                  <Button
                    variant="contained"
                    color="inherit"
                    className={classes.button}
                  >
                    <Link style={{ textDecoration: "none" }} to="/">
                      Voltar
                    </Link>
                  </Button>
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
