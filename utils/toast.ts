import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify';

export const ToastConfig: ToastOptions<{}> = {
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'dark',
};

export const ToastError = (message: string, config = ToastConfig) => {
	toast.error(`Lỗi: ${message}`, config);
};
