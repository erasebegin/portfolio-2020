import React from "react";
import styled from "styled-components";
import Hero from "./hero/Hero";
import Section from "./Section";
import Cards from "./Cards";
import "./reset.css";

import otherworld from "./img/screenshots/otherworld.png";
import jsjournal from "./img/screenshots/jsjournal.png";
import commentgen from "./img/screenshots/comment.png";
import scrabble from "./img/screenshots/scrabble.png";
import necessary from "./img/screenshots/necessary.png";
import tyrex from "./img/screenshots/tyrex.png";
import lisna from "./img/screenshots/lisna.png";
import crux from "./img/screenshots/crux.png";

function App() {
  return (
    <Container className="app">
      <Hero />
      <Section title={"Problem Solver"} color={"#FEFFBD"}>
        <p className="section-main-p">
          One of the most wonderful aspects (and perhaps the fundamental aspect)
          of programming is being able to create tools to solve problems. I was
          delighted when I reached a level of proficiency where I could go from
          having an idea to making it a reality. At first I was only able to use
          Jekyll to use and edit templates which gave me certain capabilities.
          It allowed me to create a journal of my first foray into javascript:
        </p>
        <Cards
          data={[
            {
              key: 1,
              title: "JS Journal",
              image: jsjournal,
              text: "My first foray in to web development 2020",
              url: "https://erasebegin.github.io/js-journal",
            },
            {
              key: 2,
              title: "Comment Genertator",
              image: commentgen,
              text: "A terrific time saving tool",
              url: "https://comment-generator-915.netlify.app",
              repo: "https://gitlab.com/erasebegin/comment-generator",
            },
            {
              key: 3,
              title: "Scrabble Letters",
              image: scrabble,
              text: "A simple yet game-changing teaching tool",
              url: "https://scrabble-letters.netlify.app",
            },
          ]}
        />
        <p className="section-main-p">
          From javascript I moved in to React and before long I was able to
          start turning brainwaves into reality. Having spent so much time
          during the lockdown teaching online, I was forced to write ten student
          progress reports every day— an unreasonable expectation given how
          little a student's ability changes in 24 hours. So I created a comment
          generator to spit out generic comments based on key words. My writing
          time was reduced by 90%! This is a tool that I still use every day.
        </p>
        <p className="section-main-p">
          Shortly after that I was having a free-talk class with one of my
          students and thought it would be a great idea to teach her Scrabble.
          So I found a random number generator, we assigned numbers to letters,
          and would use the number generator to "draw" from the "bag" of
          letters. But there were some big problems. Firstly this didn't follow
          the Scrabble letter distribution so we kept ending up with a handful
          of consonants. Secondly there was no system to track which letters had
          been used and when we'd used up all the letters. So of course I built
          it myself! This is still a gem of a classroom tool that allows me to
          use nothing but the classroom platform to play Scrabble. It would be
          super useful in real classrooms that have a blackboard too!
        </p>
      </Section>
      <Section title={"Playful"} color={"#FFFFE1"}>
        <p className="section-main-p">
          Even from my earliest projects I like to keep things light-hearted and
          make things that are as fun to experience as they are to build. While
          I was learning basic front-end development over on Freecodecamp.org I
          was tasked with creating a product landing page. So I went all-in
          making illustrations and writing detailed descriptions of the company
          and their products.
        </p>
        <Cards
          data={[
            {
              key: 1,
              title: "Necessary Products",
              image: necessary,
              text: "A humorous take on a product landing page",
              url: "https://erasebegin.github.io/necessary-products",
            },
            {
              key: 2,
              title: "Tyrex Unsurance",
              image: tyrex,
              text: "Spoof company website",
              url: "https://erasebegin.github.io/tyrex-unsurance",
            },
          ]}
        />
        <p className="section-main-p">
          Some months later I found myself working on yet another front-end
          class project on a CSS course on Scrimba. Due to the nature of the
          course I was quite restricted on the designs I could apply, so I
          decided to make the content as imaginative and colorful as possible to
          keep me entertained while I wrestled with the CSS grid.
        </p>
      </Section>
      <Section title={"Ambitious"} color={"#FEFFBD"}>
        <p className="section-main-p">
          Despite the short time I have spent as a web developer, I have already
          undertaken large projects that have pushed me to the very limits of my
          understanding. This year I took on my first two clients.
        </p>
        <p className="section-main-p">
          This first, Otherworld Ink, wanted a website that could serve as a
          blog, portfolio and e-commerce platform. Whilst I was confident that I
          could create a good-looking and performant blog and portfolio, I had
          never set up a CMS for a client before and didn't know the first thing
          about e-commerce. Nevertheless I worked tirelessly to understand
          everything I needed for a successful implementation. As it stands the
          client is extremely satisfied with the result and makes regular use of
          the platform I have provided them.
        </p>
        <Cards
          data={[
            {
              key: 1,
              title: "Otherworld Ink",
              image: otherworld,
              text:
                "Portfolio, blog and e-commerce platform with hand-coded cart system",
              url: "https://www.otherworldink.com",
              repo: "https://github.com/erasebegin/otherworld-ink",
            },
            {
              key: 2,
              title: "Lisna",
              image: lisna,
              text: "Promotional landing page for Lisna's music and samples",
              url: "https://www.lisna.co.uk",
            },
            {
              key: 3,
              title: "Crux",
              image: crux,
              text: "Illustrations created for the Crux tutorial",
              url: "https://www.thinkdrops.art/blog/crux-tutorial",
            },
          ]}
        />
        <p className="section-main-p">
          The second client was Lisna music who just wanted a simple landing
          page to promote their music on various platforms as well as share
          samples. Using a combination of client assets and self-created assets
          I went from design to finished product in less than 2 days and had
          another very satisfied customer.
        </p>
        <p className="section-main-p">
          As well as ambitious coding projects I also took on a large
          illustration project for Juxt, a company that is rolling out a
          bi-temporal database product called Crux. I was comissioned to create
          illustrations for the Crux tutorial website to make it more engaging
          for users. I developed the concept that each stage of the tutorial
          should be represented by a different planet. The process from concept
          to final design were a monumental undertaking that pushed me to the
          limits of my capabilities. I have come out of the other side much more
          capable and confident in my ability as an illustrator.
        </p>
      </Section>

      <Section title={"Flexibile"} color={"#FFFFE1"}>
        <p className="section-main-p">
          Besides web development and illustration I am also a musician,
          photographer, filmographer and café sitter. I also spent 4 years
          teaching English in China where I learned a great deal about the
          management of myself and others, and picked up a second language on
          the way. Though I have a wide variety of interests, I find parallels
          between them all so that I find myself growing in capability on all
          fronts when I take on new challenges. I know that whatever project I
          work on, I'll be able to offer a unique perspective with unlimited
          energy and patience.
        </p>
      </Section>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Comic Neue', cursive;
`;
