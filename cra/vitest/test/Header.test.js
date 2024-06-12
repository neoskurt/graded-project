import { render, screen } from '@testing-library/react';
import Header from '../../shared/src/components/Header';

test('renders Header component', () => {
  render(<Header />);
  expect(screen.getByText(/Manga Man/i)).toBeInTheDocument();
});
