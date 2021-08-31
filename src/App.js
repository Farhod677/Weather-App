import React, { useEffect } from 'react';
import Page from './components/Page';
import { useDispatch } from 'react-redux';
import { loadCity } from './store/actions/cityAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCity());
  });

  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
