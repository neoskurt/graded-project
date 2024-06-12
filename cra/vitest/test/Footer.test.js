import { render, screen } from '@testing-library/react';
import Footer from '../../shared/src/components/Footer';

test('renders Footer component', () => {
  render(<Footer />);
  expect(screen.getByText(/Sports Association/i)).toBeInTheDocument();
});
