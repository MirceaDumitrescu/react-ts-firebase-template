import './App.css';
import { SpinnerComponent } from './components/loadingSpinner/Spinner';

function App() {
  const isLoading = true;
  if (isLoading) {
    return <SpinnerComponent variant="large" />;
  }
  return <div className="App"></div>;
}

export default App;
