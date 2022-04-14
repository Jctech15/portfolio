import "./About.css";
import Myimg from "../images/jc_img.jpg";

export default function About() {
  return (
    <div className="About">
      <h1>Hi, I'm Janet Choe</h1>
      <section className="hero">
        <div className="details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
            deserunt, ea ab sint voluptates molestiae, quaerat rem fugiat autem
            odit esse odio? Minima voluptatum necessitatibus eveniet quibusdam
            maiores at.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
            deserunt, ea ab sint voluptates molestiae, quaerat rem fugiat autem
            odit esse odio? Minima voluptatum necessitatibus eveniet quibusdam
            maiores at.
          </p>
        </div>

        <img id="myImg" src={Myimg} alt="myImg" />
      </section>
    </div>
  );
}
