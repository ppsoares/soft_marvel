import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link } from "react-router-dom";

import CardGlyph from "./components/CardGlyph";

// const API_HASHL = "af6fe4504130de33d24b21dd68baa994";
const API_URL =
  "https://gateway.marvel.com:443/v1/public/characters?apikey=af6fe4504130de33d24b21dd68baa994";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 1000,
    height: 700
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

const mapDispatchToProps = dispatch => ({
  getHeros: () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(heros => {
        console.log(heros);
        dispatch({
          type: "SET_HEROS",
          heros
        });
      })
      .catch(() => {
        dispatch({
          TYPE: "SET_HEROS",
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

class ListaHerois extends Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.getHeros();
  }

  render() {
    const regex = new RegExp(`^(.*)${this.props.filter}(.*)$`, "ig");

    const { heros } = this.props;

    return (
      <div className="counatiner">
        <GridList cellHeight={160} cols={3}>
          {heros
            .filter(heros => heros.nome.match(regex))
            .map(hero => (
              <GridListTile key={heros.id} style={{ height: "auto" }}>
                <ListSubheader component="div">
                  <Link to="/hero">
                    <CardGlyph
                      id={hero.id}
                      nome={hero.nome}
                      descricao={hero.descricao}
                    />
                  </Link>
                </ListSubheader>
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  withStyles(styles)
)(ListaHerois);
