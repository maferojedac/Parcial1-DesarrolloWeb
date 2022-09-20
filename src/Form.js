import React from 'react'

export const Form = ({setNombreInput,setApellidoInput,setApodoInput,setIsDisabled, etiqueta, setPrintData, printData,nombreInput,apellidoInput,apodoInput, isDisabled, user}) => {

    const inputChangeNombre = (event) => {
        setNombreInput(event.target.value);
      }
    
      const inputChangeApellido = (event) => {
        setApellidoInput(event.target.value);
      }
    
      const inputChangeApodo = (event) => {
        setApodoInput(event.target.value);
      }


      const borrar = () => {
        setNombreInput("");
        setApellidoInput("");
        setApodoInput("");
      }


      const validar = () => {
        if(nombreInput != "" && apellidoInput !="" && apodoInput !="") {setIsDisabled(true)}
        if(setIsDisabled(true)) {<h5>{etiqueta}</h5>}
      }

  return (
    <form>

        <label>Nombre:</label>
        <input type="text" value={nombreInput} onChange={inputChangeNombre}/>

        <label>Apellido:</label>
        <input type="text" value={apellidoInput} onChange={inputChangeApellido}/>

        <label>Apodo:</label>
        <input type="text" value={apodoInput} onChange={inputChangeApodo}/>

        <button onClick={borrar} type="button">Limpiar</button>
        <button onClick={validar} type="submit" disabled={!isDisabled}> Enviar </button>
    </form>
  )
}
