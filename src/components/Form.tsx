import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

const Form: React.FC<any> = ({ children, ...props }) => {
  console.log(props);

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate {...props}>
      {children}
    </form>
  );
};

export default Form;
