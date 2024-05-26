import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Heading from './Heading';
import Input from './Input';
import Result from './Result';
// const Dispatch = useDispatch()
import {useDispatch, useSelector} from "react-redux"
import { useState } from 'react';
// import useDispatch from "react"
import {setEditInd, setInputVal, addTodo, deleteTodo, editTodo, updateTodo} from './Reducer/action';
// import { SET_INPUT_VAL, UPDATE_TODO } from './Reducer/actiontype';
function App() {
  const data = useSelector((state) => state?.data)
  const input = useSelector((state) => state?.input)
  const editInd = useSelector((state) => state?.editInd)
  const dispatch = useDispatch()
  // const input = useSelector((state) => state?.input)
  // const [data, setData] = useState([])
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

  return (
    <form onSubmit={submit} className='App'>
        <Heading txt={"TODO"}/>
        <div>
        {/* <Input inputVal={input}/> */}
        <Input changeVal={changeVal} inputVal={input}/>
        <Button type={"submit"} disable={input.length == 0 }  txt={editInd == -1 ? "Add" : "Update"}/>
        <Result data={data} editInd={editInd}/>
        {/* <Result/> */}
        </div>
      </form>
  );
}

export default App;
