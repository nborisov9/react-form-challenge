import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface IMainContainerProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 450,
    margin: '20px auto 0px auto',
  },
}));

const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {
  const classes = useStyles();

  return <main className={classes.root}>{children}</main>;
};

export default MainContainer;
