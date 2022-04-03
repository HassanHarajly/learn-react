const {makeObservable, observable, action} = require("mobx");

class CounterStore {
    counters = 0;

    constructor() {
        makeObservable(this,
            {
                counters:observable,
            getCounters:observable,
            incrementCounter:action});
    }
    getCounters() {
        return this.counters;
    }

    incrementCounter(numberToIncrementBy) {
        this.counters += numberToIncrementBy;
    }
}

export const counterStore = new CounterStore();

