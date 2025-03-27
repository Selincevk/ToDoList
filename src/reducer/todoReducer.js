import actionTypes from "./actionTypes";

const todoReducer = (state,action) => {
switch(action.type){
    case actionTypes.create:
const newTodo = {id: Date.now(),text:action.payload}

const updated = state.todos.concat(newTodo)
    return {...state,todos:updated};

    case actionTypes.delete:
const filtered = state.todos.filter((i) => i.id !=action.payload)
    return{...state,todos:filtered}

    case actionTypes.toggle:
        return {...state,isAdmin:!state.isAdmin}

    default:
    return state;
 
}
}

export default todoReducer
