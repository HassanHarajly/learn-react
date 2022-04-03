import {observer} from "mobx-react";

const DisplayCountersWithMobx = observer(({counterStore}) => {
    return (
        <header>
            <h1>
                Counter Amount: {counterStore.getCounters()}
            </h1>
        </header>
    );
});

export default DisplayCountersWithMobx;
