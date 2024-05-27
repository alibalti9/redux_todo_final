import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Heading from './Heading';
import Input from './Input';
import Result from './Result';
import { useDispatch, useSelector } from "react-redux"
import { setInputVal, cancelEdit, addTodo, updateTodo } from './Reducer/action';
function App() {
  const data = useSelector((state) => state?.data)
  const input = useSelector((state) => state?.input)
  const editInd = useSelector((state) => state?.editInd)
  const dispatch = useDispatch()
  const submit = (e) => {
    e?.preventDefault()
    if (editInd == -1) {
      dispatch(addTodo(input))
    } else {
      dispatch(updateTodo(input))
    }
  }
  const changeVal = (e) => {
    dispatch(setInputVal(e?.target?.value))
  }
  const cancel = () => {
    dispatch(cancelEdit())
  }

  return (
    <form onSubmit={submit} className='App'>
        <div className='logo'>
          <Heading txt={"TODO"} />
        </div>
      <div className='header'>
        <Input placeholder={"Enter your task"} changeVal={changeVal} inputVal={input} />
        <Button type={"submit"} disable={!input?.trim().length} txt={editInd == -1 ? "Add" : "Update"} />
        <Button type={"button"} clickFunc={cancel} className={editInd == -1 ? "hiddenButton" : "cancel"} txt={"Cancel"}/>
      </div>
      <Result data={data} editInd={editInd} />
    </form>
  );
}

export default App;
