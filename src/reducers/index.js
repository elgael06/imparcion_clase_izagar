import { combineReducers } from 'redux';

import usuario from './reducerUsuario';
import usuarios from'./reducerListaUsuarios';



const reducers = combineReducers({
    usuario,
    usuarios
});

export default reducers;