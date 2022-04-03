import {CounterComponentMobx} from "./mobx/CounterComponentMobx";
import {counterStore} from "./mobx/CounterStore";
import {Counters} from "./components/Counters";

function App() {

    return (
        <>
            <CounterComponentMobx counterStore={counterStore}/>

            <Counters/>
        </>
    );
}

export default App;