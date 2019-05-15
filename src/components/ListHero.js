import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from 'react-router-dom';

import CardGlyph from './components/CardGlyph';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class ListaHerois extends Component {
  render() {
    const { classes } = this.props;

    const tileData = [
      {
        id: 1,
        author: 'author'
      },
      {
        id: 2,
        author: 'author'
      },
      {
        id: 3,
        author: 'author'
      },
      {
        id: 4,
        author: 'author'
      },
      {
        id: 5,
        author: 'author'
      },
      {
        id: 6,
        author: 'author'
      }
      ,
      {
        id: 7,
        author: 'author'
      }
    ];

    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tileData.id} style={{ height: 'auto' }}>
              <ListSubheader component="div">
                <Link to="/hero" >
                  <CardGlyph />
                </Link>
              </ListSubheader>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

ListaHerois.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ListaHerois);