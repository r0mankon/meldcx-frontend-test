import { render, screen, fireEvent } from '../../testUtil';
import getLogin from '../../api/getLogin';
import Login from './Login';

// jest.mock(
//    '../../api/getLogin',
//    () => () =>
//       Promise.resolve({
//          status: 200,
//          data: {
//             user: {
//                email: 'rokon.rxr@gmail.com',
//                password: 'meld123',
//             },
//          },
//       })
// );

it('should render login Title', () => {
   render(<Login />);

   const title = screen.getByText(/Login/);
   expect(title).toBeInTheDocument();
});

it('should render email field', () => {
   render(<Login />);

   const emailField = screen.getByPlaceholderText(/Email Address/);
   expect(emailField).toBeInTheDocument();
});

it('should render password field', () => {
   render(<Login />);

   const passwordField = screen.getByPlaceholderText(/Password/);
   expect(passwordField).toBeInTheDocument();
});

it('should render login button', () => {
   render(<Login />);

   const loginButton = screen.getByText(/log in/i);
   expect(loginButton).toBeInTheDocument();
});

it('without user, pressing login should display error message', () => {
   render(<Login />);

   const loginButton = screen.getByText(/log in/i);
   fireEvent.click(loginButton);

   const errorMessage = screen.getByText('There is no room for anonymous');
   expect(errorMessage).toBeInTheDocument();
});

// it('pressing login button with correct info should log us in', () => {
//    render(<Login />);

//    const user = {
//       email: 'rokon.rxr@gmail.com',
//       password: 'meld123',
//    };

//    const emailField = screen.getByPlaceholderText(/Email Address/);
//    const passwordField = screen.getByPlaceholderText(/Password/);
//    const loginButton = screen.getByText(/log in/i);

//    fireEvent.change(emailField, user.email);
//    fireEvent.change(passwordField, user.password);

//    fireEvent.click(loginButton);

//    expect(getLogin).toBeCalledWith(user);
//    expect
// });
