import React, { useEffect, useState } from 'react';
import './styles/ContactForm.css';

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
      <div className="ContactForm__item">
        <label htmlFor="name" className="ContactForm__itemLabel">
          Name<span>*</span>
        </label>
        <input
          id="name"
          type="text"
          className="ContactForm__itemInput"
          value={formName}
          onChange={handleChangeName}
        />
      </div>
      <div className="ContactForm__item">
        <label htmlFor="email" className="ContactForm__itemLabel">
          Email<span>*</span>
        </label>
        <input
          id="email"
          type="text"
          className="ContactForm__itemInput"
          value={formEmail}
          onChange={handleChangeEmail}
        />
      </div>
      <div className="ContactForm__item">
        <label htmlFor="message" className="ContactForm__itemLabel">
          Message
        </label>
        <input
          id="message"
          type="text"
          className="ContactForm__itemInput"
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
            Thanks For Submitting!
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
