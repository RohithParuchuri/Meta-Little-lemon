import React, { useState, useEffect } from 'react';
import './ReservePage.css';
import CoreNav from './HomePage/Nav/CoreNav';
import Footer from './HomePage/Footer/Footer';

// Calculate average price from menu
const MENU_PRICES = [12.99, 7.99, 16.79, 18.99, 20.49, 9.49];
const TABLE_PRICE = MENU_PRICES.reduce((a, b) => a + b, 0) / MENU_PRICES.length;

const ReservePage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',    // yyyy-mm-dd
    time: '',
    people: 1,
    tables: 1,
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setForm(f => ({ ...f, date: today }));
  }, []);

  useEffect(() => {
    if (!form.date) return;

    const dateObj = new Date(form.date);
    const times = fetchAPI(dateObj); // fetchAPI is synchronous
    setAvailableTimes(times);
  }, [form.date]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleNumberChange = e => {
    const { name, value } = e.target;
    const num = Math.max(1, Number(value) || 1);

    if (name === 'people' && num > 4) {
      setShowDialog(true);
      return;
    }
    setForm(f => ({ ...f, [name]: num }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const total = (form.tables || 1) * TABLE_PRICE;

  if (submitted) {
    return (
      <>
        <CoreNav />
        <div className="reserve-thankyou">
          <h1>Thank You!</h1>
          <p>
            Your reservation has been received.
            <br />
            We look forward to serving you at Little Lemon.
          </p>
          <button
            className="reserve-home-btn"
            onClick={() => (window.location.href = '/')}
          >
            Back to Home
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CoreNav />
      <div className="reserve-container">
        <h1>Reserve a Table</h1>
        <form className="reserve-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Address
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Time
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a time
              </option>
              {availableTimes.map(t => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label>
            How many people?
            <input
              type="number"
              name="people"
              value={form.people}
              min="1"
              max="4"
              onChange={handleNumberChange}
              required
            />
          </label>

          <label>
            How many tables?
            <input
              type="number"
              name="tables"
              value={form.tables}
              min="1"
              onChange={handleNumberChange}
              required
            />
          </label>

          <div className="reserve-total">
            Total Bill: <span>${total.toFixed(2)}</span>
          </div>

          <button type="submit">Submit Reservation</button>
        </form>

        {showDialog && (
          <div className="reserve-dialog">
            <div className="reserve-dialog-content">
              <p>Can’t add more than 4 people per table.</p>
              <button onClick={() => setShowDialog(false)}>OK</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReservePage;
