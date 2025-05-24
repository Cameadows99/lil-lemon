
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from './Nav';
import { BookingForm } from './BookingForm';

export const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [date, setDate] = useState(() =>
    new Date().toISOString().split('T')[0]
  );

  const navigate = useNavigate();

useEffect(() => {
  if (window.fetchAPI) {
    const result = window.fetchAPI(new Date(date));
    console.log("Available times for", date, ">", result);
    setAvailableTimes(Array.isArray(result) ? result : []);
  } else {
    console.error("fetchAPI is not loaded.");
  }
}, [date]);

const submitForm = (formData) => {
    const success = window.submitAPI(formData);
    if (success) {
        navigate('/booking_success')
    }
}

  return (
    
    <main>
        <Nav />
      <BookingForm
        date={date}
        setDate={setDate}
        availableTimes={availableTimes}
        submitForm={submitForm}
      />
    </main>
  );
};
