
const reducerUsuario=(state="",actions)=>{
    switch(actions.type){
        case "ADD_USER":
            return actions.usuario;
        case "REMOVE_USER":
            return "";
        default :
        return state;
    }
}

export default reducerUsuario;