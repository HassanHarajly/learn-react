import DisplayCountersWithMobx from "./DisplayCountersWithMobx";



export const CounterComponentMobx = (({counterStore}) => {

    return (
        <>
            <h1>counters with mobx</h1>
            <button data-testid="Counter-Button" onClick={
                () => {
                counterStore.incrementCounter(1)
            }
            }> increment counter with mobx</button>

            <DisplayCountersWithMobx counterStore={counterStore}/>
        </>
    );
});
