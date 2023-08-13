import React, { useEffect, useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [showSubmittedMessage, setShowSubmittedMessage] = useState(false);

  let handleChangeName = (event) => {
    setFormName(event.target.value);
  };
  let handleChangeEmail = (event) => {
    setFormEmail(event.target.value);
  };
  let handleChangeMessage = (event) => {
    setFormMessage(event.target.value);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    setFormName('');
    setFormEmail('');
    setFormMessage('');
    setTimeout(() => {
      setShowSubmittedMessage(true);
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      setShowSubmittedMessage(false);
    }, 2000);
  }, [showSubmittedMessage]);

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <div className="ContactForm__item ContactForm__item-credentials">
        <label htmlFor="name" className="ContactForm__itemLabel">
          Name<span>*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          className="ContactForm__itemInput"
          value={formName}
          onChange={handleChangeName}
        />
      </div>
      <div className="ContactForm__item ContactForm__item-credentials">
        <label htmlFor="email" className="ContactForm__itemLabel">
          Email<span>*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          className="ContactForm__itemInput"
          value={formEmail}
          onChange={handleChangeEmail}
        />
      </div>
      <div className="ContactForm__item ContactForm__item-message">
        <label htmlFor="message" className="ContactForm__itemLabel">
          Message
        </label>
        <textarea
          id="message"
          type="text"
          className="ContactForm__itemInput ContactForm__itemInput-message"
          value={formMessage}
          onChange={handleChangeMessage}
        />
      </div>
      <div className="ContactForm__item">
        <input
          type="submit"
          className="ContactForm__itemButton"
          value="Submit"
        />
      </div>
      <div className="ContactForm__item">
        {showSubmittedMessage && (
          <div className="ContactForm__successMessage">
            Thank you for submitting!
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
