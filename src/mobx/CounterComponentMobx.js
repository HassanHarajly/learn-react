const {observer} = require( 'mobx-react');


export const CounterComponentMobx = observer(({counterStore}) => {

    return (
        <>
            {counterStore?.getCounters()}
            <button onClick={
                () => {
                counterStore.incrementCounter(100)
            }
            }> hi</button>
        </>
    );
});
