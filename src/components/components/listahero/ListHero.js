import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import CardGlyph from "../components/CardGlyph";

const API_URL =
  "https://gateway.marvel.com:443/v1/public/characters?apikey=af6fe4504130de33d24b21dd68baa994";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#000000",
    marginTop: "15px"
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
  filter: state.filter
});

class ListHero extends Component {
  componentDidMount() {
    console.log(this.props.heros.length);
    !this.props.heros.length && this.props.getHeros();
  }

  render() {
    const regex = new RegExp(`^(.*)${this.props.filter}(.*)$`, "ig");
    const { classes } = this.props;
    const { heros } = this.props;

    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={160} cols={4}>
          {heros.length &&
            heros
              .filter(hero => hero.name.match(regex))
              .map(hero => (
                <GridListTile key={hero.id} style={{ height: "auto" }}>
                  <ListSubheader component="div">
                    <Link to={`/hero/${hero.id}`}>
                      <CardGlyph
                        id={hero.id}
                        nome={hero.name}
                        imagem={`${hero.thumbnail.path}.${
                          hero.thumbnail.extension
                        }`}
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

ListHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ListHero));
