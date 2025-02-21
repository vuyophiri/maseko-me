import React from 'react';

function Contact() {
  return (
    <main>
      <section className="contact">
        <h1>Contact Me</h1>
        <form action="submit_form.php" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
