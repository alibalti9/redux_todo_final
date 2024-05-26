import { useDispatch } from "react-redux"
import Button from "../Button"
import { deleteTodo, editTodo } from "../Reducer/action"
// import {editInd} from "../App"
// import {deleteTodo, editTodo} from "./action"

const Result = ({ data, editInd }) => {
    const dispatch = useDispatch()
    const remove = (i) => {
        dispatch(deleteTodo(i))
    }
    const edit = (i) => {
        dispatch(editTodo(i))
    }
    return (
        !!data?.length && data?.map((item, index) => (
            <div className="result">
                <p key={index}>{index}. {item}</p>
                <Button disable={editInd !== -1 } type={"button"} txt={"Edit"} clickFunc={() => edit(index)} />
                <Button disable={editInd !== -1 } type={"button"} txt={"Delete"} clickFunc={() => remove(index)} />
            </div>
        )))
}
export default Result