export default function ContactForm({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <textarea className="contact-textarea" placeholder="Your Message" />

          <button className="contact-button" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}