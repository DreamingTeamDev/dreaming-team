import { Toaster } from 'react-hot-toast';
import { css } from 'styled-components';

export const toastStyles = css`
  .react-hot-toast {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    border-radius: 50px;
    padding: 10px;
  }

  .react-hot-toast-success {
    background-color: green;
    color: #000;
  }

  .react-hot-toast-error {
    background-color: tomato;
    color: #000;
  }
`;

const ToastContainer = () => {
  return <Toaster position="top-center" style={toastStyles} />;
};

export default ToastContainer;
