export function CounterComponent(props) {
    return <button data-testid="Counters" onClick={props.onClick}>
        increment
    </button>;
}