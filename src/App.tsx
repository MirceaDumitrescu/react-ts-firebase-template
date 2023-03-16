import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import handleSubmit from './api/actions/actions';
import { useRef } from 'react';
import React from 'react';
import { setData } from './store/slices/users';
interface GlobalState {
  hasError: boolean;
  data: string[];
  isLoading: boolean;
}

function App() {
  const globalState = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState<GlobalState>({
    data: [],
    hasError: false,
    isLoading: false
  });

  const dataRef = useRef<HTMLInputElement>(null);

  const submithandler: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (dataRef.current?.value) {
      handleSubmit(dataRef.current.value);
      dataRef.current.value = '';
    }
  };

  useEffect(() => {
    setState(globalState.globalState);
    console.log('state', globalState);
  }, [globalState]);

  const addMockData = () => {
    dispatch(
      setData({
        data: ['vite', 'plus', 'react'],
        isLoading: true,
        hasError: false
      })
    );
  };

  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
      <button onClick={addMockData}>Add stuff to state</button>
      <p>isLoading: {String(state?.isLoading)}</p>
      <p>hasError: {String(state?.hasError)}</p>
      {state?.data &&
        state.data.map((el, idx) => {
          return <p key={idx}>{el}</p>;
        })}
    </div>
  );
}

export default App;
