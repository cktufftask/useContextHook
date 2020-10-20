import React from 'react';
import './App.css';
import A from './A';
import {DataContext} from './context/DataContext';
function App() {
   const [value , setValue] =  React.useState('Hello World');
  
  return (
      <DataContext.Provider  value={ [ value, setValue]  }>
      <A/>
      </DataContext.Provider>
  );
}

export default App;
