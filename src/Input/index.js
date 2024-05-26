const Input = ({changeVal, inputVal, placeholder}) => {
    return <input placeholder={placeholder} value={inputVal} onChange={changeVal}/>
}
export default Input