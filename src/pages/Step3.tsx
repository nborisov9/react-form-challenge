import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import FileInput from '../components/FileUnput';
import Form from '../components/Form';
import MainContainer from '../components/MainContainer';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { IDataContext, useDataContext } from '../utils/DataContext';

const Step3 = () => {
  const history = useHistory();
  const { data, setValues }: any = useDataContext();
  const { control, handleSubmit } = useForm({
    defaultValues: { files: data.files },
  });

  const onSubmit = (data: IDataContext['data']) => {
    console.log('step3', data);
    history.push('/result');
    setValues(data);
  };

  return (
    <MainContainer>
      <Title>Step3</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;
