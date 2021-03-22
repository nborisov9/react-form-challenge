import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import * as yup from 'yup';

import Form from '../components/Form';
import Input from '../components/Input';
import MainContainer from '../components/MainContainer';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { normalizePhoneNumber } from '../utils/Step';
import { useDataContext } from '../utils/DataContext';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have corrected format') // встроенный валидатор email
    .required('Email is required field'), // если не будет заполнено выводит этот текст
});

const Step2 = () => {
  const history = useHistory();
  const { data, setValues }: any = useDataContext();

  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: { email: data.email, hasPhone: data.hasPhone, phoneNumber: data.phoneNumber },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone: boolean = watch('hasPhone');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = normalizePhoneNumber(e.target.value);
  };

  const onSubmit = (data: any) => {
    console.log('step2 data: ', data);
    setValues(data);
    history.push('/step3');
  };

  return (
    <MainContainer>
      <Title>step 2</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          label="Email"
          type="text"
          name="email"
          helperText={errors?.email?.message}
          error={!!errors.email}
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              name="hasPhone"
              inputRef={register}
              color="primary"
            />
          }
          label="Do you have are phone"
        />
        {hasPhone && (
          <div>
            <Input
              ref={register}
              label="Phone number"
              name="phoneNumber"
              id="phoneNumber"
              type="tel"
              fullWidth
              onChange={changeHandler}
            />
          </div>
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
