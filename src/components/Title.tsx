import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface ITitleProps {
  children: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Kanit',
  },
}));

const Title: React.FC<ITitleProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.title} component="h2" variant="h5">
      {children}
    </Typography>
  );
};

export default Title;
