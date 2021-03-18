import React from 'react';

const DataContext: any = React.createContext(null);

interface IDataProvider {
  children: React.ReactNode;
}

const DataProvider: React.FC<IDataProvider> = ({ children }) => {
  const [data, setData] = React.useState({});

  const setValues = (values: any) => setData((prev) => ({ ...prev, ...values }));

  return <DataContext.Provider value={{ data, setValues }}>{children}</DataContext.Provider>;
};

export default DataProvider;
export const useDataContext = () => React.useContext(DataContext);
