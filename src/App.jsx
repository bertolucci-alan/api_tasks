import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/Header.jsx';
import Tasks from "./components/Tasks.jsx";
import AddTask from './components/AddTask';
import TaskDetails from "./components/TaskDetails.jsx";


import "./App.css";

// STATE -> estado do componente -> quando ele é atualizado,
// o componente é renderizado novamente

// PROPS -> dados que podem ser passados de um componente pai
// para um componente filho

const App = () => {
  //invocando state, passando o nome, a função, e o valor dentro do state
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Viajar",
      completed: false,
    },
    {
      id: "2",
      title: "Aprender React",
      completed: true,
    },
    
  ]);

  //disparando evento requisição da API
  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data);
    }

    fetchTasks();
  }, [])


  //mapeando as task e verificando se o IDs são semelhantes
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed }
      
        return task;
      
    });
    setTasks(newTasks);
  }
  
  
  //handleTaskAddition irá pegar o inputData e adicionar à task, depois irá setar o state
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ];
    setTasks(newTasks);
  }
  

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    
    setTasks(newTasks);
  }
  
  return (
    //fragments:
    <Router>
      <div className="container">
        <Header />
        <Route path='/'
        //exact-> faz a filtragem do path para renderize apenas na página inicial
        exact 
         render={() => (
          <>
          <AddTask handleTaskAddition={handleTaskAddition}/>
          <Tasks tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}/>
          </>
        )} 
        
        />
        <Route path="/:taskTitle" exact component={TaskDetails}></Route>
      </div>
    </Router>
  );
};

export default App;
