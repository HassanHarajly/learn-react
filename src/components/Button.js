
import './Header.css'
import PropTypes from "prop-types";



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
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button;
