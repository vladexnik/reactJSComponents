import logo from './logo.svg';
import './App.css';

const Header=()=>{
  return <h2>HeaderComponent</h2>
} // component

const Field=()=>{
    return <input placeholder='type here...' type='text'/>
}

function Button(){
  const res=()=>{
    return 'Logging';
  }
  let text='Log in';
  let logged=false;

  return <button>{logged ? 'Enter' : text }</button>;
}


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Field/>
      <Button/>
    </div>
  );
}

export default App;
