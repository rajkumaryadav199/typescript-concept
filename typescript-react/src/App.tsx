import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import TodoItem from './Components/Todo/TodoItem';

function App() {
  return (
    <div className="App">
     <Counter />
     <TodoItem />
    </div>
  );
}

export default App;
