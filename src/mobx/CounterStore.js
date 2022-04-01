const {makeObservable, observable, action, autorun} = require("mobx");

class CounterStore {
    counters = 0;

    constructor() {
        makeObservable(this,
            {
                counters:observable,
            getCounters:observable,
            incrementCounter:action});
        autorun(() => console.log(this.getCounters()));
    }
    getCounters() {
        return this.counters;
    }

    incrementCounter(numberToIncrementBy) {
        this.counters += numberToIncrementBy;
    }
}

export const counterStore = new CounterStore();
counterStore.incrementCounter(1);

