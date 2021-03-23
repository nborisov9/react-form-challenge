import React, { Context } from 'react';

import { IDataContext } from '../interfaces';

const initialDataContext: IDataContext = {
  data: {
    firstName: '',
    lastName: '',
    email: '',
    hasPhone: false,
    phoneNumber: '',
    files: [],
  },
  setValues: (values: IDataContext['data']) => {},
};

const DataContext: Context<IDataContext> = React.createContext(initialDataContext);
const useDataContext = () => React.useContext(DataContext);

interface IDataProvider {
  children: React.ReactNode;
}

const DataProvider: React.FC<IDataProvider> = ({ children }) => {
  const [data, setData] = React.useState<IDataContext['data']>(initialDataContext['data']);
  console.log(data);

  const setValues = (values: IDataContext['data']) => setData((prev) => ({ ...prev, ...values }));

  return <DataContext.Provider value={{ data, setValues }}>{children}</DataContext.Provider>;
};

export default DataProvider;

export { useDataContext };
export type { IDataContext };
