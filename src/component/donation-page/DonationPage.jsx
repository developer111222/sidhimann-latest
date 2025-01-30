import React, { useState } from 'react';

function DonationPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    city: '',
    state: '',
    zipcode: '',
    paymentMethod: '',
    creditCardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    donationAmount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <section className="page-title-area" style={{ backgroundImage: "url(https://via.placeholder.com/1920x430)" }}>
        <div className="container">
          <div className="title-area-data">
            <h2>Start Donation</h2>
            <p>Organisations committed to ending poverty worldwide.</p>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Donation</li>
          </ol>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <form className="donate-page" onSubmit={handleSubmit}>
            <h3>How often would you like to give?</h3>
            <select
              className="nice-select Advice"
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleInputChange}
            >
              <option value="Monthly">Monthly</option>
              <option value="Select Topic 1">Select Topic 1</option>
              <option value="Select Topic 2">Select Topic 2</option>
              <option value="Select Topic 3">Select Topic 3</option>
              <option value="Select Topic 4">Select Topic 4</option>
            </select>

            <h5>Now choose how much.</h5>
            <ul className="give-donation-levels-wrap">
              <li>
                <button
                  type="button"
                  className="give-donation-level-btn"
                  onClick={() => setFormData({ ...formData, donationAmount: '$10' })}
                >
                  $10
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="give-donation-level-btn"
                  onClick={() => setFormData({ ...formData, donationAmount: '$20' })}
                >
                  $20
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="give-donation-level-btn"
                  onClick={() => setFormData({ ...formData, donationAmount: '$30' })}
                >
                  $30
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="give-donation-level-btn"
                  onClick={() => setFormData({ ...formData, donationAmount: '$40' })}
                >
                  $40
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="give-btn give-btn-level-custom"
                  onClick={() => setFormData({ ...formData, donationAmount: 'custom' })}
                >
                  Custom Amount
                </button>
              </li>
            </ul>

            <div className="enter-your-information pt-5">
              <div className="enter-your-information-data">
                <h5>Enter your billing information</h5>
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label>Complete Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <label>State / Zipcode</label>
                <div className="d-flex">
                  <select
                    className="nice-select Advice"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  >
                    <option value="State">State</option>
                    <option value="State Topic 1">State Topic 1</option>
                    <option value="State Topic 2">State Topic 2</option>
                    <option value="State Topic 3">State Topic 3</option>
                    <option value="State Topic 4">State Topic 4</option>
                  </select>
                  <input
                    type="text"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    placeholder="Zipcode"
                  />
                </div>
              </div>

              <div className="enter-your-information-data payment">
                <h5>Enter Your Payment Information</h5>
                <label>Select Method</label>
                <div className="radio-to mb-5">
                  <input
                    type="radio"
                    id="visa"
                    name="paymentMethod"
                    value="visa"
                    checked={formData.paymentMethod === 'visa'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="visa">
                    <img alt="visa" src="assets/img/visa.jpg" />
                  </label>
                  <input
                    type="radio"
                    id="PayPal"
                    name="paymentMethod"
                    value="PayPal"
                    checked={formData.paymentMethod === 'PayPal'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="PayPal">
                    <img alt="PayPal" src="assets/img/visa-2.jpg" />
                  </label>
                </div>

                <label>Credit Card Number</label>
                <input
                  type="number"
                  name="creditCardNumber"
                  value={formData.creditCardNumber}
                  onChange={handleInputChange}
                />
                <label>Expiration Date</label>
                <input
                  type="number"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                />
                <div className="d-flex">
                  <div className="time-number">
                    <select
                      className="nice-select Advice"
                      name="expirationMonth"
                      value={formData.expirationMonth}
                      onChange={handleInputChange}
                    >
                      <option value="Month">Month</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="time-number ms-md-2">
                    <select
                      className="nice-select Advice"
                      name="expirationYear"
                      value={formData.expirationYear}
                      onChange={handleInputChange}
                    >
                      <option value="Year">Year</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                </div>

                <input type="submit" className="give-submit" value="Donate Now" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default DonationPage;
