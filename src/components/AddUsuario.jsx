import React,{useState} from 'react';

const Usuario =({agregar_lista})=>{
    //estado
    const [nombre,setNombre] = useState("");
    //funciones
    const agregar= e =>{
      e.preventDefault();
      nombre !=="" ?function (){
          agregar_lista(nombre);
          setNombre("");
          
      }():
      alert("Coloque Nombre !!!");
    }
    return(<form style={{width:"40%",float:"left"}}>
        <label>Agregar Usuario : </label>
        <br />
        <input type="text" value={nombre} onChange={e=>setNombre(e.target.value)} />
        <button onClick={agregar}>Agregar</button>
    </form>);
  }

  export default Usuario;