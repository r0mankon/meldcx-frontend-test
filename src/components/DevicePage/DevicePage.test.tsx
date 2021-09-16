import Devices from '.';
import { render, screen, act, cleanup } from '../../testUtil';

jest.mock(
   '../../api/getDevices',
   () => () =>
      Promise.resolve({
         online: 3,
      })
);

it('should render devices online counter', () => {
   render(<Devices />);

   const text = screen.getByText(/0/);
   expect(text).toBeInTheDocument();
});

it('should render devices online text', () => {
   render(<Devices />);

   const text = screen.getByText(/devices online/i);
   expect(text).toBeInTheDocument();
});

it('should render notify button', () => {
   render(<Devices />);

   const button = screen.getByText(/notify/i);
   expect(button).toBeInTheDocument();
});

it('should render log out button', () => {
   render(<Devices />);

   const button = screen.getByText(/log out/i);
   expect(button).toBeInTheDocument();
   // cleanup();
});
