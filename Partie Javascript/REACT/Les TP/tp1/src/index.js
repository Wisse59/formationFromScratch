import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);

/*const liste1 = [1,2,3,4];
liste1.map((v,i,liste1) => {
  console.log(v * 2);
});*/