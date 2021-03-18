import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface IMainContainer {
  children: React.ReactNode;
  props?: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 1000,
  },
}));

const MainContainer: React.FC<IMainContainer> = ({ children, ...props }) => {
  const classes = useStyles();

  return <main className={classes.root}>{children}</main>;
};

export default MainContainer;
