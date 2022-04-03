import {render, screen} from "@testing-library/react";
import {CounterComponentMobx} from "./CounterComponentMobx";
import DisplayCountersWithMobx from "./DisplayCountersWithMobx";


test('should call increment counter when button is clicked', () => {
    const counterStoreStub = new CounterStoreStub();
    render(<CounterComponentMobx counterStore={counterStoreStub} />);
    const button = screen.getByTestId("Counter-Button");
    button.click();
    expect(counterStoreStub.incrementHasBeenCalled).toEqual(true);
    expect(counterStoreStub.getCounters()).toEqual(1);
});

test('should call get counter when component is rendered', () => {
    const counterStoreStub = new CounterStoreStub();
    render(<DisplayCountersWithMobx counterStore={counterStoreStub} />);
    expect(counterStoreStub.getCountersHasBeenCalled).toEqual(true);
});

class CounterStoreStub {
    counters = 0;
    incrementHasBeenCalled = false;
    getCountersHasBeenCalled = false;

    incrementCounter() {
        this.counters += 1;
        this.incrementHasBeenCalled = true;
    }

    getCounters() {
        this.getCountersHasBeenCalled = true;
        return this.counters;
    }
}