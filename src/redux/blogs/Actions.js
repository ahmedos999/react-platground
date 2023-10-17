import { ADD,REMOVE } from "./types"


export const add=(blog)=>{
    return{
        type:ADD,
        payload:blog
    }
}

export const remove=(id)=>{
    return{
        type:REMOVE,
        id:id
    }
}