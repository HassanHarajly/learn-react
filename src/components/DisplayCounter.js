const DisplayCounter = ({props}) => {
    return (
        <header>
            <h1>
            counter: {props.count + ""}
            </h1>
        </header>
    );
}

export default DisplayCounter;
