import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Provider from './context/provider';

function App() {
  return (
    <div className="meals">
      <Provider>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
