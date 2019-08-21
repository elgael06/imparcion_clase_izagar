import React from 'react';
import { connect } from 'react-redux';

const Usuario =({usuario,cambiar,agregar})=>{
    //funciones
    const comprobar_agregar= e =>{
      e.preventDefault();
      usuario !=="" ?function (){
        agregar(usuario);
        cambiar("");
      }():
      alert("Coloque Nombre !!!");
    }
    return(<form style={{width:"40%",float:"left"}}>
        <label>Agregar Usuario : </label>
        <br />
        <input type="text" value={usuario} onChange={e=>cambiar(e.target.value)} />
        <button onClick={comprobar_agregar}>Agregar</button>
    </form>);
  }

const mapStateProps=state=>({
  usuario:state.usuario
})

const mapDispatchToProps = dispatch =>({
    cambiar(usuario){
      dispatch({
          type:"ADD_USER",
          usuario
      })
      },
      agregar(usuario){
        dispatch({
          type:"ADD_LIST",
          usuario
        })
    }
})

  export default connect(mapStateProps,mapDispatchToProps)( Usuario);