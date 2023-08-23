import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('Hero__header element exists', () => {
  render(<Hero />);
  const header = screen.getByText(/Amanda Willman/i);
  expect(header).toBeInTheDocument();
});
test('Hero__sub element exists', () => {
  render(<Hero />);
  const suHeader = screen.getByText(/Landscape Photographer/i);
  expect(suHeader).toBeInTheDocument();
});
