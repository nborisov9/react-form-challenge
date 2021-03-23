import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { CloudUpload, InsertDriveFile } from '@material-ui/icons';
import List from '@material-ui/core/List';
import React from 'react';
import Dropzone from 'react-dropzone';
import { Control, Controller } from 'react-hook-form';

import { IFiels } from '../interfaces';

const useStyles = makeStyles(() => ({
  root: {
    background: '#eee',
    padding: 15,
  },

  icon: {
    width: '100%',
    margin: '0 auto',
    fontSize: 40,
  },

  text: {
    fontFamily: 'Kanit',
    fontSize: 20,
    textAlign: 'center',
    margin: '10px 0px 0px 0px',
  },
}));

interface IFileInput {
  name: string;
  control: Control;
}

const FileInput: React.FC<IFileInput> = ({ control, name }) => {
  const classes = useStyles();

  console.log('c', control);
  console.log('n', name);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper className={classes.root} {...getRootProps()} variant="outlined">
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <CloudUpload className={classes.icon} />
                <p className={classes.text}>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file: IFiels, index: number) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};

export default FileInput;

// компонент Control нужен для работы с рефами
// getRootProps - файлы которая получает сама зона куда можно сбрасывать файлы (функция которая вернет пропсы)
// getInputProps - файлы которые получает сам инпут (функция которая вернет пропсы)
