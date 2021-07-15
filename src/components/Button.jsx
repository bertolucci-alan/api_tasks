import React from 'react';
import './Button.css';
//CHILDREN -> filhos de um componente

const Button = ({children, onClick}) => {
    return ( 
    <button onClick={onClick} className="add-button">
    {children}
    </button> 
    );
}
 
export default Button;