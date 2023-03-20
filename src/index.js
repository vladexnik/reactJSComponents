import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//const elem=<h2>Hello maaan</h2>;  // jsx

//const elem=React.createElement('h2',{className: 'greeting'},'HELLOO Man');
// babel переводит первый во второй

const text='HEllivarian';
const elem=(
  <div>
    <h2 className='texttt'>Текст: {text}</h2> 
    <input type='text' />
    <label htmlFor=''></label>
    <button tabIndex='2'>Click it</button>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>  
  //elem

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
