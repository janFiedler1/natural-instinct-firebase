import React, { useState } from 'react';
import '../component-css/GeneratedContactComponent.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can implement your logic   
    //to send the form data
    // to a server or perform other actions.
    console.log('Form submitted:', { name, email, message });

    setSubmitted(true);
  };

  return (
    <div className='contact-form page'>
      {submitted ? (
        <p>Message sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"   

            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Submit</button>   

        </form>
      )}
    </div>
  );
};

export default ContactForm; 