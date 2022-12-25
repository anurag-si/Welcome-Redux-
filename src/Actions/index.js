export const changeName = (newName) => {
    
    return{
        type: 'NAME',
        payload: newName
        
    }
}

export const clear = () => {
    return{
        type:'CLEAR'
    }
}