// cargamos la función para crear un store
import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados)
import reducers from '../reducers';

const initialState ={
    usuario:"",
    lista_usuarios:[]
}

const store = createStore(reducers,initialState);

export default store;