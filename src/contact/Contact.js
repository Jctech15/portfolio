import "./Contact.css";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="Contact">
      <h4>Contact Me!</h4>
      <div className="flexContact">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          accusamus laboriosam culpa quidem dignissimos? Fugit, ex expedita
          voluptatibus reprehenderit autem sequi? Provident nam ea voluptate
          laborum aspernatur at quod nemo!
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
        <form className="contactForm">
          <div className="name">
            <input type="text" placeholder="name" />
            <label for="name" autocomplete="off"></label>
          </div>
          <div className="email">
            <input type="text" placeholder="email" />
            <label for="email" autocomplete="off"></label>
          </div>
          <div className="message">
            <textarea
              id="textarea"
              name="message"
              cols="30"
              rows="10"
              placeholder="message"
              autocomplete="off"
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
