import React, { useRef,useEffect } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/headerpic.svg";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  useEffect(() => {
    // Initialize the ref elements to valid DOM nodes
    clientCount.current.textContent = "0";
    projectCount.current.textContent = "0";
  }, []);

  const animationClientsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    a: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Ashwani kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A MERN web Developer", "A Competitive Coder", "An Enthusiast Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
          <motion.a {...animations.a} href="mailto:ashwanikumar29707@gmail.com">
            Hire Me
            </motion.a>
            <motion.a {...animations.a} href="#work">
            Projects <BsArrowUpRight />
            </motion.a>
           
          </div>

          <article>
            <p>
              +
              { (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                >
                  500
                </motion.span>
              )}
            </p>
            <span>DSA Questions(overall)</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {(
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    20
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>ashwanikumar29707@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Ashwani" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
