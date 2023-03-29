import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';

const isBackEndError = (err: any): err is AxiosError<{ message: string }> => {
  if (err.response.data) {
    return true;
  }
  return false;
};

const notifyError = (message: string) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
  });
const notifySuccess = (message: string) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 5000,
  });

function handleError(err: any) {
  if (axios.isAxiosError(err) && isBackEndError(err)) {
    return notifyError(err.response?.data.message as string);
  }
  if (err instanceof Error) {
    return notifyError(err.message);
  }
}

export function handleSuccess(message: string) {
  return notifySuccess(message);
}

export default handleError;
