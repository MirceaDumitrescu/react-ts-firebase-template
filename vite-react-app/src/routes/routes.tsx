import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
