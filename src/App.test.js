import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders main Little Lemon heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByRole('heading', { name: /Little Lemon/i, level: 1 });
  expect(heading).toBeInTheDocument();
});