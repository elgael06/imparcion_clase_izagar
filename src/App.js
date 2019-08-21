//librerias
import React from 'react';
//componentes
import Tabla from './components/Tabla';
import Usuario from './components/AddUsuario';
//estilos
import './css/main.css';

const App = () => {
	return (<div className="App">
		<h1>Usuarios</h1>
		<hr /> 
		<Usuario />
		<Tabla  />
	</div>);
}

export default App;
