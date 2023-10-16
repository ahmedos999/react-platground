import { INCREMENT } from "./types"
import { DECREMENT } from "./types"

export const incerment=()=>{
    return{
        type:INCREMENT
    }
}

export const decerment=()=>{
    return{
        type:DECREMENT
    }
}