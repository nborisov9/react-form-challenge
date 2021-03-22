import React from 'react';
import TextField from '@material-ui/core/TextField';

interface IInputProps {
  id: string;
  label: string;
  type: string;
  name: string;
  error?: boolean;
  helperText?: string | undefined;
  required?: boolean;
  fullWidth?: boolean;
  onChange?: (e: any) => void;
}

const Input = React.forwardRef((props: IInputProps, ref) => {
  return <TextField variant="outlined" margin="normal" inputRef={ref} {...props}></TextField>;
});

export default Input;
