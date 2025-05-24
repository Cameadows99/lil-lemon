
  global.fetchAPI = jest.fn(() => ['17:00', '18:00']);

import { render, screen } from '@testing-library/react';
import { BookingForm } from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';
import App from './App';



test('renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText('Booking Form');
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns correct defaultTimes', () => {
  const result = initializeTimes();
  expect(window.fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(['17:00', '18:00']);
});

test('updateTimes returns the same state', () => {
  const fakeDate = '2025-05-23';
  const result = updateTimes([], { type: 'update_times', date: fakeDate });

  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(result).toEqual(['17:00', '18:00']);
});

// html validation tests

describe('BookingForm HTML5 Validation', () => {
  test('date input has required attribute', () => {
    render(<BookingForm availableTimes={[]} date="" setDate={() => {}} submitForm={() => {}} />);
    const input = screen.getByLabelText(/choose date/i);
    expect(input).toBeRequired();
  });

  test('time select has required attribute', () => {
    render(<BookingForm availableTimes={['18:00']} date="2025-05-24" setDate={() => {}} submitForm={() => {}} />);
    const select = screen.getByLabelText(/choose time/i);
    expect(select).toBeRequired();
  });

  test('guest input has min and max attributes', () => {
    render(<BookingForm availableTimes={['18:00']} date="2025-05-24" setDate={() => {}} submitForm={() => {}} />);
    const input = screen.getByLabelText(/number of guests/i);
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '10');
    expect(input).toBeRequired();
  });

  test('occasion select has required attribute', () => {
    render(<BookingForm availableTimes={['18:00']} date="2025-05-24" setDate={() => {}} submitForm={() => {}} />);
    const select = screen.getByLabelText(/occasion/i);
    expect(select).toBeRequired();
  });
});

//Javascript validation tests

describe('BookingForm JS Validation', () => {
  test('submit button is disabled when form is invalid', () => {
    render(<BookingForm availableTimes={[]} date="" setDate={() => {}} submitForm={() => {}} />);
    const button = screen.getByRole('button', { name: /make your reservation/i });
    expect(button).toBeDisabled();
  });

  test('submit button is enabled when form is valid', () => {
    render(
      <BookingForm
        availableTimes={['18:00']}
        date="2025-05-24"
        setDate={() => {}}
        submitForm={() => {}}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '18:00' }
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 2 }
    });

    const button = screen.getByRole('button', { name: /make your reservation/i });
    expect(button).not.toBeDisabled();
  });
});