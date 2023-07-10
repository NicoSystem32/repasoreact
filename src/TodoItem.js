
//Items para el Todo
function TodoItem(props){    
    return(
      <li>
        <span>v</span>
        <p>{props.text}</p>        
        <p>{props.completed ? 'Tarea completada' : 'Tarea no completada'}</p>
        <span>X</span>
      </li>
    )
}

export {TodoItem}