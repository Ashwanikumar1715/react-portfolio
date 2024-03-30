import React from "react";
import me from "../assets/eren1.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Ashwani"
        />

        <h2>Ashwani Kumar</h2>
        <p>Decide Youself For Yourself</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/ashwani-kumar1715" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/as_hw_ani0507 " target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Ashwanikumar1715" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
