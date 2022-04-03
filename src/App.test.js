import { render, screen } from '@testing-library/react';
import App from './App';

test('should increment counter on click of button', () => {
  render(<App />);
  const button = screen.getByTestId("Counter-Button");
  button.click();
  button.click();
  const CounterAmount = screen.getByText("Counter Amount: 2");
  expect(CounterAmount).toBeInTheDocument();
});

