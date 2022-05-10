import "./Contact.css";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="Contact">
      <h4>Contact Me!</h4>
      <div className="flexContact">
        <div className="tabletFlex">
          <p>
            Feel free to contact me for coffe chat virtually or even a short
            chat. You can find me on social media or you can send me a message
            here!
          </p>
          <ul>
            <li>
              <a className="react-icons" href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a className="react-icons" href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a className="react-icons" href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a className="react-icons" href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <form className="contactForm">
          <div className="name formMargin">
            <input type="text" placeholder="name" />
            <label for="name" autocomplete="off"></label>
          </div>
          <div className="email formMargin">
            <input type="text" placeholder="email" />
            <label for="email" autocomplete="off"></label>
          </div>
          <div className="message formMargin">
            <textarea
              id="textarea"
              name="message"
              cols="30"
              rows="10"
              placeholder="message"
              autocomplete="off"
            ></textarea>
          </div>
          <div className="submitButton">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
