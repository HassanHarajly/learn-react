import {render, screen} from '@testing-library/react';
import App from './App';



test('should increment counter when button is clicked', () => {
    render(<App/>);
    const navigationButton = screen.getByTestId("navigateToCounters");
    navigationButton.click();
    const button = screen.getByTestId("Counters");
    button.click();
    button.click();
    const CounterAmount = screen.getByText("Counter: 2");
    expect(CounterAmount).toBeInTheDocument();
});
