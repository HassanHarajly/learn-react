const DisplayCounter = ({props}) => {
    return (
        <header>
            <h1>
                Counter: {props.count}
            </h1>
        </header>
    );
}

export default DisplayCounter;
