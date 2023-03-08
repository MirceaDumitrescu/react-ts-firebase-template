import ReactDOM from 'react-dom/client';
import './index.css';
import DataLayerComponent from './store/DataLayer';
import PublicRoutes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const test = false;
root.render(
  <DataLayerComponent>
    <PublicRoutes />
  </DataLayerComponent>
);
