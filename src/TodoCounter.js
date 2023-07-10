
const estilos = {
  backgroundColor: 'red'
}
function TodoCounter({ total, completed }){
    return(
      <h1 style={estilos}>
        Has completadooo {completed} de {total}
      </h1>
    )
}

export {
    TodoCounter
}