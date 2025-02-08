import { createSlice,nanoid } from "@reduxjs/toolkit";
 const initialState = {
    todos:[{id:1,text:"hello"}]
 }

 export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(), //nanoid is inbuilt function which is provide by the redux itgives us the unique id 
                text:action.payload  //payload is an object which contains many properties
            }
            state.todos.push(todo)

        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload )

        },


    }

 })
 export const {addTodo,removeTodo} = todoSlice.actions;
 export default todoSlice.reducer