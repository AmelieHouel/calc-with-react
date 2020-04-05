import React from 'react';
import './Operator.css';

export const Operator = props => ( 
<div 
  className="operator"
  onClick={() => props.handleClick(props.children)}
> 
  {props.children} 
</div>
);