import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export const successToast = (message: string) => {
  toast.success(message);
};

export const errorToast = (message: string) => {
  toast.error(message);
};

export const warningToast = (message: string) => {
  toast.warning(message);
};

export default Toast;
export const tst = { successToast, errorToast, warningToast };
