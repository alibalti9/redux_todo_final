const Button = ({txt, clickFunc, type, disable}) => {
    return(
        <>
    <button disabled={disable} onClick={clickFunc} type={type}>{txt}</button>
    </>
    )
}
export default Button;