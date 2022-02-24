import './Header.css'
const Header = ({title}) => {
    return (
        <header>
            <h1>
                {title}
            </h1>
        </header>
    );
}
Header.defaultProps = {
    title:'please add title'
}
export default Header;
