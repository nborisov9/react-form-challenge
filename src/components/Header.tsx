import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: theme.spacing(3, 0, 2),
    fontSize: 40,
    fontFamily: 'Permanent Marker',
    color: 'deeppink',
    textShadow: '1px 1px darkmagenta',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} component="h1" variant="h5">
      The Ultimate Form Chalenge
    </Typography>
  );
};

export default Header;
