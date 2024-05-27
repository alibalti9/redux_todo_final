import {SET_EDIT_IND, SET_INPUT_VAL, DELETE_TODO, EDIT_TODO, UPDATE_TODO, ADD_TODO, CANCEL_EDIT} from "./actiontype";

const setInputVal = (payload) => ({
    type: SET_INPUT_VAL,
    payload,
})

const cancelEdit = (payload) => ({
    type: CANCEL_EDIT,
    payload,
})

const setEditInd = (payload) => ({
    type: SET_EDIT_IND,
    payload,
})

const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
})

const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
})

const editTodo = (payload) => ({
    type: EDIT_TODO,
    payload,
})

const updateTodo = (payload) => ({
    type: UPDATE_TODO,
    payload,
})

export {setEditInd, setInputVal, addTodo, deleteTodo, editTodo, updateTodo, cancelEdit}