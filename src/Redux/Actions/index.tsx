type propIndex = {
    index : number
}
export const add = (payload : any) =>{
    return {
        type:"ADD",
        payload : payload
        
    }
};

export const edit = (payload : any) =>{
    return {
        type:"EDIT",
        payload : payload
    }
}
export const del= (index : any) =>{
    return {
        type:"DELETE",
        payload : index
    }
}