import './App.css';
import { SpinnerComponent } from './components/loadingSpinner/Spinner';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
// import handleSubmit from './api/actions/actions';
// import { useRef } from 'react';
// import React from 'react';
// import { setData } from './store/slices/users';
// interface GlobalState {
//   hasError: boolean;
//   data: string[];
//   isLoading: boolean;
// }

function App() {
  const isLoading = true;
  // const globalState = useSelector((state: any) => state);
  // const dispatch = useDispatch();
  // const [state, setState] = useState<GlobalState>({
  //   data: [],
  //   hasError: false,
  //   isLoading: false
  // });

  //   const dataRef = useRef<HTMLInputElement>(null);

  // const submithandler: React.FormEventHandler<HTMLFormElement> = (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();
  //   if (dataRef.current?.value) {
  //     handleSubmit(dataRef.current.value);
  //     dataRef.current.value = '';
  //   }
  // };

  // useEffect(() => {
  //   setState(globalState.globalState);
  // }, [globalState]);
  if (isLoading) {
    return <SpinnerComponent variant="large" />;
  }
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
