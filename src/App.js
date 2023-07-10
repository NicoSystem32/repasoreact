import React  from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

// Creo los Todos un para que sean más dinámicos 
const defaultTodos =[
  {text:'Cortar cebolla', completed:true},
  {text:'Finalizar curso react', completed:false},
  {text:'llorar con la llorona', completed:true},
  {text:'Sacar a vaca', completed:true},
]

function App() {
  return (
    <React.Fragment>

      {/* así se envían los parámetros a los componentes */}
      <TodoCounter completed={16} total={32}/>
      <TodoSearch/>
      <TodoList>
        {/* Recorre todo el array de de "Todos" para mostrarlo dinámicamente */}
        {defaultTodos.map(todo =>(
          <TodoItem key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
          />
        ))}                
      </TodoList>      
      <CreateTodoButton/>
      
    </React.Fragment>
  );
} 

export default App;
