
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