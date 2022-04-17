import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerFill } from 'react-icons/ri';
import { BsPhone } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xy138l8', 'template_qtym3op', form.current, '340q1bfh33iywOzBH');

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>GMAIL</h5>
            <a href="mailto:adrianhenry215@gmail.com">Send A Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Facebook Messenger</h4>
            <h5>Adrian Henry</h5>
            <a href="https://m.me/thirdgenerationrecords">Send Me A Direct Message</a>
          </article>
          <article className="contact__option">
            <BsPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>(321)-370-0836</h5>
            <a href="sms:(321)(3700836)">Text Me</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
