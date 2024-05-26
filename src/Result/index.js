import { useDispatch } from "react-redux"
import Button from "../Button"
import { deleteTodo, editTodo } from "../Reducer/action"
import { Style } from "./style"

const Result = ({ data, editInd }) => {
    const dispatch = useDispatch()
    const remove = (i) => {
        dispatch(deleteTodo(i))
    }
    const edit = (i) => {
        dispatch(editTodo(i))
    }
    return (
        <div style={Style.container}>
            {!!data?.length && data?.map((item, index) => (
                // if (data[index]) {
                <div style={Style.contentMain}>
                    <abbr title={item} style={Style.para} key={index}>{index}. {item}</abbr>
                    <Button style={Style.editButton} disable={editInd !== -1} type={"button"} txt={"Edit"} clickFunc={() => edit(index)} />
                    <Button style={Style.deleteButton} disable={editInd !== -1} type={"button"} txt={"Delete"} clickFunc={() => remove(index)} />
                </div>
                // }
            ))}
        </div>
    )
}
export default Result