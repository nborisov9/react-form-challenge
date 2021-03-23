interface IFiels {
  name: string;
  size: number;
}

interface IDataContext {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    hasPhone: any;
    phoneNumber: string;
    files: any;
  };
  setValues: (values: IDataContext['data']) => void;
}

export type { IFiels, IDataContext };
