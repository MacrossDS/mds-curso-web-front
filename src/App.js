import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import AppRouter from './router'; 
import './App.css';
import 'antd/dist/antd.css';

export default () => {
  return <Provider store={store}>
      <App />
    </Provider>
  
}


function App() {

  // const handleMenuClick = () => console.log('clicked')

  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>

  );
}

// export default App;


