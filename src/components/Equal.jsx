import React from 'react';
import './Equal.css';


export const Equal = props => ( 
    <div 
      className="equal"
      onClick={() => props.handleClick(props.children)}
    > 
      {props.children} 
    </div> 
    );
