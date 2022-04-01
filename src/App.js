import {CounterComponentMobx} from "./mobx/CounterComponentMobx";
import {counterStore} from "./mobx/CounterStore";

function App() {

    return (
        <CounterComponentMobx counterStore={counterStore}/>
    );
}

export default App;