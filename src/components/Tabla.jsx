import React from 'react';

const Tabla=({lista})=>{
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
              </tr>)}
          </tbody>
      </table>
    </div>);
  }

  export default Tabla;