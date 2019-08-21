import React from 'react';
import { connect } from 'react-redux';
import remove_user_to_list from '../actions/remove_user_to_list';

const Tabla=({lista,remover})=>{
	//
    return(<div style={{width:"40%",float:"left"}}>
        <table>
          <thead>
              <tr>
              <th>ID</th>
              <th>Nombre</th>
              </tr>
          </thead>
          <tbody>
              {lista.map((e,i)=>
                  <tr key={i+1}>
                      <td>{i+1}</td>
                      <td>{e}</td>
                      <td><u onClick={()=>remover(i)}>remover</u></td>
              </tr>)}
          </tbody>
      </table>
    </div>);
  }
  const mapStateProps=state=>({
    lista:state.usuarios
  });
  
  const mapDispatchToProps =dispatch=>({
      remover(posicion){
          dispatch(remove_user_to_list(posicion))
      }
  });
  export default  connect(mapStateProps,mapDispatchToProps)(Tabla);