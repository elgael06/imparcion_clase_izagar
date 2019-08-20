//librerias
import React,{useState} from 'react';
import { useStore } from 'react-redux';
//componentes
import Tabla from './components/Tabla';
import Usuario from './components/AddUsuario';
//estilos
import './css/main.css';

const App = () => {
	//store
	const store = useStore();
	//
	const {lista_usuarios} = store.getState();
	//estatus
	 const [usuarios, setusuarios] = useState(lista_usuarios);
	 //funciones
	 const agregar=usuario=>{
		 let lista = usuarios.map(e=>e);
		store.dispatch({usuario:usuario,type:"ADD_LIST"});
		setusuarios(lista);
	 }
	 console.log(store.getState())
	return (<div className="App">
		<h1>Usuarios</h1>
		<hr /> 
		<Usuario agregar_lista={agregar} />
		<Tabla lista={lista_usuarios} />
	</div>);
}

export default App;
