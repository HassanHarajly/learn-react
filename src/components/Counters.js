import {useReducer} from "react";
import {reducer} from "../reducers/Reducer";
import DisplayCounter from "./DisplayCounter";
import {CounterComponent} from "./CounterComponent";

export function Counters() {
    const [state, dispatch] = useReducer(reducer,  { count: 0 });

    return (
        <>
            <h1>counters with reducers</h1>
            <CounterComponent onClick={() => dispatch({type: 'increment', payload: 1})}/>
            <DisplayCounter props={state}/>
        </>
    );
}

