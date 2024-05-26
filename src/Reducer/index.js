// import localStorage from "../helper";
import { localData } from "../helper";
import { DELETE_TODO, EDIT_TODO, SET_EDIT_IND, SET_INPUT_VAL, UPDATE_TODO, ADD_TODO } from "./actiontype";

const initialState = {
    // data: [],
    data: JSON.parse(localData("get")),
    input: "",
    editInd: -1
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_VAL:
            return {
                ...state,
                input: action.payload
            }
        case SET_EDIT_IND:
            return {
                ...state,
                editInd: action.payload
            }
        case ADD_TODO:
            const data = !!state?.data?.length ? [...state?.data, action?.payload] : [action?.payload]
            localData("set", data)
            // console.log("payload: ", action?.payload)
            return {
                ...state,
                data: data,
                input: ""
            }
        case DELETE_TODO:
            const deleteData = state?.data?.filter((_, index) => index != action?.payload)
            // localStorage.setItem("data", JSON.stringify(deleteData))
            localData("set", deleteData)
            return {
                ...state,
                data: deleteData
            }
        case EDIT_TODO:
            const tempData = [...state?.data]
            const i = action.payload
            // const inputVal = [...state.input]
            // input
            return {
                ...state,
                input: tempData[i],
                editInd: i,
                
            }
        case UPDATE_TODO:
            let tempResult = [...state?.data]
            tempResult[state.editInd] = action.payload
            localData("set", tempResult)
            // localStorage.setItem("data", JSON.stringify(tempData))
            return {
                ...state,
                data: tempResult,
                input: "",
                editInd: -1
            }
        default:
            return {
                ...state
            }
    }
}
export default TodoReducer