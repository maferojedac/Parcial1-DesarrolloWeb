import {React, useState} from 'react';
import './App.css';

/* 
const userComponent=() => {
  const formik = useFormik ({
    user: {
      nombre:'',
      apellido:'',
      apodo:''
    },
    onSubmit:values=>{
      const etiqueta = (JSON.stringify(values))
    }
  })
}
 */
function App() {

  const [nombreInput, setNombreInput] = useState("");
  const [apellidoInput, setApellidoInput] = useState("");
  const [apodoInput, setApodoInput] = useState("");

  const user = {
    nombre:{nombreInput},
    apellido:{apellidoInput},
    apodo:{apodoInput},
  }

  const inputChangeNombre = (event) => {
    setNombreInput(event.target.value);
  }

  const inputChangeApellido = (event) => {
    setApellidoInput(event.target.value);
  }

  const inputChangeApodo = (event) => {
    setApodoInput(event.target.value);
  }

  const validar = () => {
    if(nombreInput==null || apodoInput==null || apellidoInput==null) {}
    else()
  }

  return (
     <>
      <form action="/form" method="post">

        <label for="nombre">Nombre:</label>
        <input type="text" value={nombreInput} onChange={inputChangeNombre}/>

        <label for="apellido">Apellido:</label>
        <input type="text" value={apellidoInput} onChange={inputChangeApellido}/>

        <label for="apodo">Apodo:</label>
        <input type="text" value={apodoInput} onChange={inputChangeApodo}/>

        <button type="reset" >Limpiar</button>

        <button disabled={disabled}> Enviar </button>


      </form>

      
      const etiqueta = JSON.stringify(user);

        
     </>
  );
}

export default App;
