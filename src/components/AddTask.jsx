import React, { useState } from "react";

import Button from "./Button";

import './AddTask.css';

const AddTask = ({handleTaskAddition}) => {

  const [inputData, setInputData] = useState('');

  //pegando o valor do input
  const handleInputChange = (e) => {
    setInputData(e.target.value)

  }

  //pega o valor e manda ao hadleTaskAddition
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  }

  return (
   
    <div className="add-task-container">

      <input 
      onChange={handleInputChange}
      value={inputData}
      className="add-task-input"
      type="text"
      />

        <Button onClick={handleAddTaskClick}>Adicionar</Button>
  
    </div>
    
  );
};

export default AddTask;
