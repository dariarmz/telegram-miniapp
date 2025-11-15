import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Flisovichok Сервисы', () => {
  render(<App />);
  const headingElement = screen.getByText(/Flisovichok Сервисы/i);
  expect(headingElement).toBeInTheDocument();
});
