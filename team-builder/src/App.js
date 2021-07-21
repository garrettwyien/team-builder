import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}



function App() {
  const [ team, setTeam ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  };

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (newUser.username || newUser.email || newUser.role) 
    setTeam([...team, newUser]);
    setFormValues(initialFormValues)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Form App</h1>
        <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />

      </header>
    </div>
  );
}

export default App;
