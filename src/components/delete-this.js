// In the child component, declare a state variable and a function to update that variable, and pass both as props to the parent component: ```jsx 
// Child component 
import React, { useState } from 'react';

const ChildComponent = ({ onStateChange }) => { 
    const [childState, setChildState] = useState('');

    const handleChange = (e) => {
        const value = e.target.value; 
        setChildState(value); 
        onStateChange(value); 
    };

    return ({childState});
}

export default ChildComponent;

// 2. In the parent component, define a state variable and a function to update that variable. Pass the function as a prop to the child component:
// ```jsx
// Parent component
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentState, setParentState] = useState('');

  const handleStateChange = (value) => {
    setParentState(value);
  };

  return (
    <div>
      <p>Parent state: {parentState}</p>
      <ChildComponent onStateChange={handleStateChange} />
    </div>
  );
}

export default ParentComponent;