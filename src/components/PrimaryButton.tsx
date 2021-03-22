import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PrimaryButton: React.FC<any> = ({ children, props }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
