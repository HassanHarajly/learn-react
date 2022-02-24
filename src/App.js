import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Button from "./components/Button";
function App() {
  const name = 'hassan'
  return (
    <div className="App">
      <Header title='something2'/>
      <Button onClick={onClick} text='click'/>

    </div>
  );
}
const onClick = ()=> {
    console.log('something');
}
export default App;
