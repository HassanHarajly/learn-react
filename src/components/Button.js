
import './Header.css'



const Button = ({text,onClick}) => {
    return (
    <button
        onClick={onClick}>
        {text}
    </button>
    );
}
Button.defaultProps = {
    text:'add title'
}
export default Button;
