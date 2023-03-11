import { createContext, useState } from 'react';
import AlertType from '../helpers/AlertEnum';

const AlertContext = createContext({
  showAlert: ({ type, message }: { type: AlertType; message: string }) => {},
  alert: {
    type: AlertType.Error,
    message: ''
  }
});

const AlertProvider = ({ children }: { children: React.ReactElement }) => {
  const [alert, setAlert] = useState({ type: AlertType.Error, message: '' });

  const showAlert = ({
    type,
    message
  }: {
    type: AlertType;
    message: string;
  }) => {
    setAlert({
      type,
      message
    });
  };

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        alert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
export { AlertProvider };
