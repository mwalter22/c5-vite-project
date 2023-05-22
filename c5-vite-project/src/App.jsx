// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent, { OtroComponente } from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
    // <> /*elemeto padre, se llama fragment*/
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener" >
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Proyecto Vite C5 + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  //   )
  // }

    // --------------------- EJERCIO MESA C3S (se modifica lo de arriba) --------------------------
    // function App() {

    //   let fechaHoy = new Date();
    //   let dia = fechaHoy.getDate();
    //   let mes = fechaHoy.getMonth() + 1;
    //   let anio = fechaHoy.getFullYear();

    //   mes = mes < 9 ? "0" + mes : mes;
    // <>
    //   <h1>Ya borramos todo</h1>
    //   <div>La fecha de hoy es: {dia + "-" + mes + "-" + anio}</div>
    //   <form action='' target='' method='get' name='formDatosPersonales'>
    //     <label htmlFor="nombre">
    //       <p>Nombre:</p>
    //       <input placeholder='Escribe tu nombre' id='nombre' />
    //     </label>
    //     <label htmlFor="apellido">
    //       <p>Apellido: </p>
    //       <input placeholder='Escribe tu apellido' id='apellido' />
    //     </label>
    //     <input type="submit" name='enviar' value='Enviar datos' />
    //   </form>
    // </>
    // }

    // export default App


// --------------- CLASE 4A (componentes de clase y función) ------------------
function App() {

  return (
    <>
      <ClassComponent/>
      <OtroComponente/>
      <FuncComponent texto='Función n° 1' amount={150000}/>
      <FuncComponent texto='Función n° 2' amount={300000}/>
    </>
  )
}    

export default App