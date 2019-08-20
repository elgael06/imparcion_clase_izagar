import { combineReducers } from 'redux';

const usuario=(state="",actions)=>{
    switch(actions.type){
        case "ADD_USER":
            return actions.usuario;
        case "REMOVE_USER":
            return "";
        default :
        return state;
    }
}

const lista_usuarios =(state=[],actions)=>{
    switch(actions.type){
        case "ADD_LIST":
            return state.concat(actions.usuario || "NA");
        case "REMOVE_LIST":
            return state.filter((e,i)=>i!==actions.posicion)
            default:
                return state;
    }
}

const reducers = combineReducers({
    usuario,
    lista_usuarios
});

export default reducers;