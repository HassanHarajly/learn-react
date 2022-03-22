import {useReducer} from "react";
import {reducer} from "../reducers/Reducer";
import DisplayCounter from "./DisplayCounter";
import {CounterComponent} from "./CounterComponent";

function Counters() {
    const [state, dispatch] = useReducer(reducer,  { count: 0 });

    return (
        <div>
            <CounterComponent onClick={() => dispatch({type: 'increment', payload: 1})}/>
            <DisplayCounter props={state}/>
        </div>
    );
}

export default Counters;