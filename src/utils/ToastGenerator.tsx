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

const success = (message: string) => {
  toast.success(message, {
    position: 'top-left'
  });
};

const error = (message: string) => {
  toast.error(message, {
    position: 'top-left'
  });
};

const warning = (message: string) => {
  toast.warning(message, {
    position: 'top-left'
  });
};

export default Toast;
export const tst = { success, error, warning };
