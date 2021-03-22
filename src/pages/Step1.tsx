import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import MainContainer from '../components/MainContainer';
import PrimaryButton from '../components/PrimaryButton';
import Form from '../components/Form';
import Input from '../components/Input';
import Title from '../components/Title';
import { useDataContext } from '../utils/DataContext';

const useStyles = makeStyles(() => ({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers') // /^([0-9]*)$/ - все символы А-Я, A-Z, кроме цифр
    .required('First name is required field'), // если поле не заполнено

  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is required field'),
});

const Step1 = () => {
  const classes = useStyles();
  const history = useHistory();
  const { data, setValues }: any = useDataContext();

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema), // yupResolver для валидации
  });

  const onSubmit = (data: { firstName: string; lastName: string }) => {
    console.log('step1 data: ', data);
    setValues(data);
    history.push('/step2');
  };

  return (
    <MainContainer>
      <Title>step 1</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputWrapper}>
          <Input
            ref={register}
            id="firstName"
            label="First Name"
            type="text"
            name="firstName"
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
          />
          <Input
            ref={register}
            id="lastName"
            label="Last Name"
            type="text"
            name="lastName"
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
          />
          <PrimaryButton>Next</PrimaryButton>
        </div>
      </Form>
    </MainContainer>
  );
};

export default Step1;
