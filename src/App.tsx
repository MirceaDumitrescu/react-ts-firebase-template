import './App.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setData } from './store/actions/globalState';
import { useSelector } from 'react-redux';


interface GlobalState {
  hasError: boolean,
  data: string[],
  isLoading: boolean
}

function App() {

  const globalState = useSelector((state: GlobalState) => state)
  const dispatch = useDispatch();
  const [state, setState] = useState<GlobalState>({
    data: [],
    hasError: false,
    isLoading: false
  })

  useEffect(() => {
    setState(globalState.globalState)
    console.log(state)
  }, [globalState])

  const addMockData = () => {
    dispatch(setData({
      data: ['vite', 'plus', 'react'],
      isLoading: true,
      hasError: false
    }))
  }

  return <div className="App">
    <button onClick={addMockData}>Add stuff to state</button>
    <p>isLoading: {String(state.isLoading)}</p>
    <p>hasError: {String(state.hasError)}</p>
    {
      state.data && state.data.map((el, idx) => {
        return (
          <p key={idx}>{el}</p>
        )
      }
      )
    }
  </div>;
}

export default App;
