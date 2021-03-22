import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

import MainContainer from '../components/MainContainer';
import Title from '../components/Title';
import { useDataContext } from '../utils/DataContext';
import { InsertDriveFile } from '@material-ui/icons';
import PrimaryButton from '../components/PrimaryButton';
import Swal from 'sweetalert2';

const useStyles = makeStyles(() => ({
  linkWrapper: {
    margin: '20px 0px 0px 0px',
    '& a': {
      color: '#000',
      textDecoration: 'none',
    },
  },

  tableContainer: {
    marginBottom: 20,
  },

  buttonWrapper: {
    width: '100%',
  },
}));

const Result = () => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const classes = useStyles();
  const { data }: any = useDataContext();

  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;

  const onSubmit = async () => {
    const formData = new FormData();

    if (data.files) {
      data.files.forEach((file: any) => {
        formData.append('file', file, file.name);
      });
    }

    entries.forEach((entry: any) => {
      formData.append(entry[0], entry[1]);
    });

    // const res = await fetch('http://localhost:4000/', {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (res.status === 200) {
    //   Swal.fire('good job');
    //   setSuccess(true);
    // }

    console.log(formData);
  };

  if (success) {
    return <Confetti />;
  }

  return (
    <MainContainer>
      <Title>Form Result</Title>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry: Array<any>) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Title>Files</Title>
          <List>
            {files.map((file: any, index: any) => (
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
      <div className={classes.linkWrapper}>
        <Title>
          <Link to="/"> start over </Link>
        </Title>
      </div>
      <div className={classes.buttonWrapper} onClick={onSubmit}>
        <PrimaryButton>submit</PrimaryButton>
      </div>
    </MainContainer>
  );
};

export default Result;
