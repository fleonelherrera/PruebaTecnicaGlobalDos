import './App.css';

import React, { useState, useRef } from 'react';

function App() {
  
  const [tareas, setTareas] = useState([]);
  const inputRef = useRef();

  const handleSubmit = () => {
    const nuevaTarea = inputRef.current.value;
    //validación
    if (nuevaTarea !== '') {
      setTareas([...tareas, { descripcion: nuevaTarea, completa: false }]);
      inputRef.current.value = '';
    } else {
      alert('No se puede ingresar una tarea vacía')
    }
  }

  const handleClickEnTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completa = true;
    setTareas(nuevasTareas);
  }

  // Con filter creo un nuevo array que cumpla la condición en la que tarea.completa es false
  const tareasPendientes = tareas.filter(tarea => !tarea.completa)

  return (
    <div>
      <h1>To do list</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Agregar</button>

      <ul>
        {tareas.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClickEnTarea(index)}
            className={item.completa ? 'completa' : ''}
          >
            {item.descripcion}
          </li>
        ))}
      </ul>

      <p>Tareas pendientes: {tareasPendientes.length}</p>
    </div>
  );
}

export default App;