//librerias
import React from 'react';
import { connect } from 'react-redux';
//actions
import add_user from '../actions/add_user';
import add_user_to_list from '../actions/add_user_to_list';

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
    return(<form style={{width:"40%",float:"left",textAlign:"left"}}>
        <label >Agregar Usuario : </label>
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
      dispatch(add_user(usuario));
      },
      agregar(usuario){
        dispatch(add_user_to_list(usuario));
    }
})

  export default connect(mapStateProps,mapDispatchToProps)( Usuario);