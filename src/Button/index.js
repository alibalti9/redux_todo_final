const Button = ({ txt, clickFunc, type, disable, style, className }) => {
    return <button className={className} style={style} disabled={disable} onClick={clickFunc} type={type}>{txt}</button>
}
export default Button;