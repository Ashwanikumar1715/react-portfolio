import React from "react";
import gfg from "../assets/gfg2.png";
import codechef from "../assets/code.jpeg";
import leet from "../assets/leet.png";
import ninja from "../assets/ninja.png";
import hack from "../assets/hack2.avif";
import git from "../assets/git2.webp";
const Testimonial = () => (
  <div id="testimonial">
    <h2 className="uniquecss">My Coding Platforms</h2>

    <section>
      <TestimonialCard
        name={"Geeks for Geeks"}
        feedback={<ul>
          <li>450+ Questions</li>
          <li>Love Babar Dsa Sheet</li>
        </ul>}
        imageSrc={gfg}
        link={"https://auth.geeksforgeeks.org/user/as_hw_ani0507/"} />

      <TestimonialCard
        name={"Codechef"}
        feedback={<ul>
          <li>2⭐ MAX(1508)</li>
          <li>Leveling Up</li>
        </ul>}
        imageSrc={codechef}
        link={"https://www.codechef.com/users/ashwani1715"} />

      <TestimonialCard
        name={"Leetcode "}
        feedback={<ul>
          <li>120+ Questions</li>
          <li>Contest Rating:1,440</li>
        </ul>}
        imageSrc={leet}
        link={"https://leetcode.com/ashwani1715/"} />

    </section>
    <section>
      <TestimonialCard
        name={"Coding Ninja"}
        feedback={<ul>
          <li>Level 7(expert)</li>
          <li>6 Batches gained</li>
        </ul>}
        imageSrc={ninja}
        link={"https://www.codingninjas.com/studio/profile/Ashwani1715"} />

      <TestimonialCard
        name={"Hacker Rank"}
        feedback={<ul>
          <li>C++    : ⭐⭐⭐⭐⭐</li>
          <li>C      : ⭐⭐⭐⭐</li>
          <li>Problem solving : ⭐⭐⭐</li>
        </ul>}
        imageSrc={hack}
        link={"https://www.hackerrank.com/ashwanikumar0101"} />

      <TestimonialCard
        name={"GitHub "}
        feedback={<ul>
          <li>30+ Repositories</li>
          <li>Achievments: Pull shark,Quick Draw</li>
        </ul>}
        imageSrc={git}
        link={"https://github.com/Ashwanikumar1715"} />

    </section>
  </div>
  
);

const TestimonialCard = ({ name, feedback, imageSrc,link }) => (
  <article className="testimonial-card ">
    <img src={imageSrc} alt="platforms" className="user-image" />
    <h4>{name}</h4>
    <p>{feedback}</p>
   <a href={link} target="_blank"  rel="noreferrer">visit</a>
  </article>
);

export default Testimonial;
