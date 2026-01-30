import { useState } from "react";
import "./form.scss";

const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [subject, setSubject] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      e.target.reset();
      setSubject("");
      setSelectOpen(false);
    }, 2500);
  };

  const options = ["Support", "Sales", "Other"];

  return (
    <section className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Contact Us</h1>
        <p className="contact__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__grid">
            <div className="contact__field">
              <label className="contact__label">Name</label>
              <input
                className="contact__input"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">Email</label>
              <input
                className="contact__input"
                type="email"
                placeholder="Enter your Email"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">Message</label>
              <textarea
                className="contact__textarea"
                placeholder="Write your question here"
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label">Subject</label>
              <div
                className={`custom-select ${selectOpen ? "open" : ""}`}
                onClick={() => setSelectOpen(!selectOpen)}
              >
                <div className="custom-select__trigger">
                  {subject || "Select Subject"}
                  <span className="custom-select__arrow">&#9662;</span>
                </div>
                {selectOpen && (
                  <div className="custom-select__options">
                    {options.map((option, idx) => (
                      <div
                        key={idx}
                        className="custom-select__option"
                        onClick={() => {
                          setSubject(option);
                          setSelectOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <button className="contact__button" type="submit">
            Send Message
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="contact__popup">
          <div className="contact__popup-content">
            ❤️ Message sent!
            <br />
            We’ll get back to you soon 🚀
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
