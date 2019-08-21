
const  reducerListaUsuarios =(state=[],actions)=>{
    switch(actions.type){
        case "ADD_LIST":
            return state.concat(actions.usuario || "NA");
        case "REMOVE_LIST":
            return state.filter((e,i)=>i !== actions.posicion)
        default:
            return state;
    }
}

export default reducerListaUsuarios;