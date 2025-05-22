import React, { useEffect, useState } from "react";

export default function ContactForm({ onClose }) {
  // 1. State to store form inputs all together
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted , setIsSubmitted] = useState(false)

  // 2. Handle change for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target; // get the name of the input and its new value
    setFormData(prev => ({
      ...prev,           // copy previous state
      [name]: value      // update the changed field dynamically
    }));
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Locally:", formData); 
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(true);
  };

  useEffect(()=>{
    if(isSubmitted){
        const timer = setTimeout(()=>{
            setIsSubmitted(false);
             onClose(); 
        },2000)
        return ()=>clearTimeout(timer)
    }
  },[isSubmitted])

  return (
    <div className="popup-overlay">
      {
        isSubmitted ? <div className="popup-content">Thanks for submitting your message!</div>:
        <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"                  // important: matches formData key
            placeholder="Your Name"
            value={formData.name}        // controlled input value
            onChange={handleChange}      // update state on typing
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
          className="contact-textarea"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="contact-button" type="submit">Send</button>
        </form>
        
      </div>}
    </div>
  );
}
