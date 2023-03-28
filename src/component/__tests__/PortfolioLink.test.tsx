import { render, screen } from '@testing-library/react';
import PortfolioLink from '../PortfolioLink';

test('renders description and linkIds', () => {
  render(<PortfolioLink description='description Field' link='https://example.com' linkId='linkId Field'/>);
  expect(screen.getByText(/description field/i)).toBeInTheDocument();
  expect(screen.getByText(/linkId field/i)).toBeInTheDocument();
});
