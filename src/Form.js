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
        setPrintData(false)
      }

      if(nombreInput != "" && apellidoInput !="" && apodoInput !="") {setIsDisabled(true)}

      const validar = (event) => {
        event.preventDefault();
        setPrintData(true);
      }

  return (
    <form className="form" onSubmit={validar}>

      <div className="label">
        <label>Nombre:</label>
        <input type="text" value={nombreInput} onChange={inputChangeNombre}/>

        <label>Apellido:</label>
        <input type="text" value={apellidoInput} onChange={inputChangeApellido}/>

        <label>Apodo:</label>
        <input type="text" value={apodoInput} onChange={inputChangeApodo}/>
      </div>

      <div className="clear">
        <button onClick={borrar} type="button">Limpiar</button>
      </div>

      <div className="sent">
        <button type="submit" disabled={!isDisabled}> Enviar </button>
      </div>
        
    </form>
  )
}
