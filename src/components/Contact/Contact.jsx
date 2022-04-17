import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerFill } from 'react-icons/ri';
import { BsPhone } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>adrianhenry2115@gmail.com</h5>
            <a href="mailto:adrianhenry215@gmail.com">Send A Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerFill />
            <h4>Facebook Messenger</h4>
            <h5>Adrian Henry</h5>
            <a href="https://m.me/thirdgenerationrecords">Send Me A Direct Message</a>
          </article>
          <article className="contact__option">
            <BsPhone />
            <h4>Phone</h4>
            <h5>(321)-370-0836</h5>
            <a href="sms:(321)(3700836)">Text Me</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
