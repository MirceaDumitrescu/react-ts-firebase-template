import ReactDOM from 'react-dom/client';
import './index.css';
import DataLayerComponent from './store/DataLayer';
import PublicRoutes from './routes/routes';
import Toast from './utils/ToastGenerator';
import AppRunner from './utils/AppRunner';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <DataLayerComponent>
    <Toast />
    <AppRunner />
    <PublicRoutes />
  </DataLayerComponent>
);
