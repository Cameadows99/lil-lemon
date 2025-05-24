import { useEffect, useState } from 'react';

export const BookingForm = ({ date, setDate, availableTimes, submitForm }) => {
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const valid = 
    date &&
    time &&
    guests >= 1 &&
    guests <= 10 &&
    occasion;

    setIsValid(valid);
  }, [date, time, guests, occasion])



  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid){
    const formData = { date, time, guests, occasion };
    const success = window.submitAPI(formData);
    submitForm(formData)
    console.log('Submitted:', formData, '→ Success:', success);}
  };

  return (
    
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: 300, gap: 12 }}
    >
        <h1>Booking Form</h1>
      <label htmlFor="res-date">Choose date:</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time:</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
      </select>

      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      <button type="submit" disabled={!isValid} >Make Your Reservation</button>
    </form>
  );
};