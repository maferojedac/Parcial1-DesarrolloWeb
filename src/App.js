import {React, useState} from 'react';
import './App.css';
import {Form} from './Form'

function App() {

  const [nombreInput, setNombreInput] = useState("");
  const [apellidoInput, setApellidoInput] = useState("");
  const [apodoInput, setApodoInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [printData, setPrintData] = useState(false);

  const user = {
    nombre:{nombreInput},
    apellido:{apellidoInput},
    apodo:{apodoInput}
  }

  const etiqueta = JSON.stringify(user)
  
  return (
     <>

      <Form 
        setNombreInput={setNombreInput} setApellidoInput={setApellidoInput} setApodoInput={setApodoInput} setPrintData={setPrintData} printData={printData}
        isDisabled={isDisabled} nombreInput={nombreInput} apellidoInput={apellidoInput} apodoInput={apodoInput} setIsDisabled={setIsDisabled} user={user} etiqueta={etiqueta}>
      </Form>
        
     </>
  );
}

export default App;