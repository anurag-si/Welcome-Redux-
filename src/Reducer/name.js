const changeNameReducer = (state=" ", action) =>{
    
    switch(action.type){
        case 'CLEAR':
            return state=" ";

        case 'NAME':
            return action.payload
            
        default:
            return state;    
    }
}

export default changeNameReducer