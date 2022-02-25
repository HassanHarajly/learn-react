import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks"
function App() {
    const [tasks,setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'idk something',
            day: 'Feb 6th at 2:30pm',
            reminder: true
        }
    ]);



  const name = 'hassan'
  return (
    <div className="App">
      <Header title='something2'/>
      <Button onClick={onClick} text='click'/>
        <Tasks tasks={tasks}/>

    </div>
  );
}
const onClick = ()=> {
    alert('something');
}
export default App;
