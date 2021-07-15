import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
    
    const params = useParams();

    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container" onClick={handleBackButtonClick}>
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Necessitatibus reprehenderit libero facere cum repudiandae beatae minima,
                     obcaecati quo facilis eligendi veniam laudantium velit, ratione,
                      molestias ut omnis maxime distinctio excepturi.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;