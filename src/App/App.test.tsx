import { render, screen } from '../testUtil';
import App from './App';

it('renders login page', () => {
   render(<App />);
   const linkElement = screen.getByText(/login/i);
   expect(linkElement).toBeInTheDocument();
});
