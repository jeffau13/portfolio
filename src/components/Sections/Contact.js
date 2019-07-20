import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
        </header>

        <p>
          The element of time, sem ante ullamcorper dolor nulla quam placerat
          viverra environment is not with our customers. Free makeup and skirt
          until the mouse. Japan this innovative and ultricies carton salad
          clinical ridiculous now passes from enhanced. Mauris pot innovative
          care for my pain.
        </p>

        <form method="post" action="#">
          <div className="row">
            <div className="col-6 col-12-mobile">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobile">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="col-12">
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
