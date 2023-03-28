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
      <h1>Lista de tareas</h1>

      <div className='container'>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Añadir</button>

        <ul>
          {tareas.map((item, index) => (
            <li key={index} className={item.completa ? 'completa' : ''}>
              {item.descripcion}
              <button
                className='btnBorrar' onClick={() => handleClickEnTarea(index)}>✔
              </button>
            </li>
          ))}
        </ul>
        <p>Tareas pendientes: {tareasPendientes.length}</p>
      </div>
      
    </div>
  );
}

export default App;