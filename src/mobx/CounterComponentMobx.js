import DisplayCountersWithMobx from "./DisplayCountersWithMobx";



export const CounterComponentMobx = (({counterStore}) => {

    return (
        <>

            <button data-testid="Counter-Button" onClick={
                () => {
                counterStore.incrementCounter(1)
            }
            }> increment counter with mobx</button>

            <DisplayCountersWithMobx counterStore={counterStore}/>
        </>
    );
});
