const Button = ({ txt, clickFunc, type, disable, style }) => {
    return <button style={style} disabled={disable} onClick={clickFunc} type={type}>{txt}</button>
}
export default Button;