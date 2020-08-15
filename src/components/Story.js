import React from "react";
import Section from "./Section";
import Cards from "./Cards";

import otherworld from "../img/screenshots/otherworld.png";
import weather from "../img/screenshots/weather.png";
import commentgen from "../img/screenshots/comment.png";
import scrabble from "../img/screenshots/scrabble.png";
import necessary from "../img/screenshots/necessary.png";
import tyrex from "../img/screenshots/tyrex.png";
import lisna from "../img/screenshots/lisna.png";
import crux from "../img/screenshots/crux.png";

export default function Story() {
  return (
    <>
      <Section title={"Ambitious"} color={"#FEFFBD"}>
        <p className="section-main-p">
          I have undertaken large projects that have pushed me to the very
          limits of my understanding of programming languages as well as
          business and design concepts. This year I have worked on my biggest
          projects to date.
        </p>
        <p className="section-main-p">
          Artist and illustrator, Otherworld Ink, wanted{" "}
          <a
            href="https://github.com/erasebegin/otherworld-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            a website that could serve as a blog, portfolio and e-commerce
            platform
          </a>
          . Whilst I was confident that I could create a good-looking and
          performant blog and portfolio, I had never set up a CMS for a client
          before and didn't know the first thing about e-commerce. Nevertheless
          I worked tirelessly to understand everything I needed for a successful
          implementation. As it stands the client is extremely satisfied with
          the result and makes regular use of the platform I have provided them.
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
          Some time later I was approached by Lisna Music who wanted a simple{" "}
          <a
            href="https://www.lisna.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            landing page to promote their music
          </a>{" "}
          on various platforms as well as share samples. Using a combination of
          client assets and self-created assets I went from design to finished
          product in less than 2 days and had another very satisfied customer.
        </p>
        <p className="section-main-p">
          As well as ambitious coding projects I have also taken on a large
          illustration project for Juxt, a company that is rolling out a
          bi-temporal database product called Crux. I was comissioned to create
          <a
            href="https://www.thinkdrops.art/blog/crux-tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            illustrations for the Crux tutorial website
          </a>{" "}
          to make it more engaging for users. I developed the concept that each
          stage of the tutorial should be represented by a different planet. The
          process from concept to final design was a monumental undertaking that
          pushed me to the limits of my capabilities. I have come out of the
          other side much more capable and confident in my ability as an
          illustrator.
        </p>
      </Section>
      <Section title={"Problem Solver"} color={"#FFFFE1"}>
        <p className="section-main-p">
          One of the most wonderful aspects (and perhaps the fundamental aspect)
          of programming is being able to create tools to solve problems. I was
          delighted when I reached a level of proficiency where I could go from
          having an idea to making it a reality.
        </p>
        <p className="section-main-p">
          Having spent so much time teaching online, I was forced to write ten
          student progress reports every day— an unreasonable expectation given
          how little a student's ability changes in 24 hours.{" "}
          <a
            href="https://gitlab.com/erasebegin/comment-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            So I created a comment generator
          </a>{" "}
          to spit out generic comments based on key words. My writing time was
          reduced by 90%! This is a tool that I still use every day.
        </p>
        <Cards
          data={[
            {
              key: 1,
              title: "Comment Genertator",
              image: commentgen,
              text: "A terrific time saving tool",
              url: "https://comment-generator-915.netlify.app",
              repo: "https://gitlab.com/erasebegin/comment-generator",
            },
            {
              key: 2,
              title: "Scrabble Letters",
              image: scrabble,
              text: "A simple yet game-changing teaching tool",
              url: "https://scrabble-letters.netlify.app",
            },
            {
              key: 3,
              title: "Quick Weather",
              image: weather,
              text:
                "Built using Node, Express and Handlebars. Hand-drawn weather graphics",
              url: "https://www.quick-weather.com",
            },
          ]}
        />
        <p className="section-main-p">
          Shortly after that I was having a free-talk class with one of my
          students and thought it would be a great idea to teach her Scrabble.
          So I found a random number generator, we assigned numbers to letters,
          and would use the number generator to "draw" from the "bag" of
          letters. But there were some big problems. Firstly this didn't follow
          the Scrabble letter distribution so we kept ending up with a handful
          of consonants. Secondly there was no system to track which letters had
          been used and when we'd used up all the letters. So of course{" "}
          <a
            href="https://scrabble-letters.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            I built it myself
          </a>
          ! This is still a gem of a classroom tool that allows me to use
          nothing but the classroom platform to play Scrabble. It would be super
          useful in real classrooms that have a blackboard too!
        </p>
        <p>
          But there are still so many things I want to make and I definitely
          need server-side scripting to implement fully functioning
          applications. So I have embarked on a journey in to Node JS, the most
          recent accomplishment of which is{" "}
          <a
            href="https://www.quick-weather.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            weather app that uses my own api server and integrates with two REST
            APIs for geocoding and weather reports.
          </a>
        </p>
      </Section>
      <Section title={"Playful"} color={"#FEFFBD"}>
        <p className="section-main-p">
          Even from my earliest projects I liked to keep things light-hearted
          and make things that are as fun to experience as they are to build.
          While I was learning basic front-end development over on
          Freecodecamp.org I was tasked with{" "}
          <a
            href="https://erasebegin.github.io/necessary-products"
            target="_blank"
            rel="noopener noreferrer"
          >
            creating a product landing page
          </a>
          . So I went all-in making illustrations and writing detailed
          descriptions of the company and their products. The graphics are all
          (digitally) hand-drawn and I couldn't be prouder of the results.
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
          Some months later I found myself working on yet another{" "}
          <a
            href="https://erasebegin.github.io/tyrex-unsurance"
            target="_blank"
            rel="noopener noreferrer"
          >
            front-end class project
          </a>{" "}
          on a CSS course on Scrimba. Due to the nature of the course I was
          quite restricted on the designs I could apply, so I decided to make
          the content as imaginative and colorful as possible to keep me
          entertained while I wrestled with the CSS grid.
        </p>
      </Section>

      <Section title={"Flexible"} color={"#FFFFE1"}>
        <p className="section-main-p">
          Besides web development and illustration I am also a <b>musician</b>,
          <b>photographer</b>, <b>filmographer</b> and <b>café sitter</b>. I
          spent 4 years teaching English in China where I learned a great deal
          about the management of myself and others, and{" "}
          <b>picked up a second language on the way</b>. Though I have a{" "}
          <b>wide variety of interests</b>, I find parallels between them all so
          that I find myself growing in capability on all fronts when I take on
          new challenges. I know that whatever project I work on, I'll be able
          to offer a unique perspective with{" "}
          <b>unlimited energy and patience</b>.
        </p>
      </Section>
    </>
  );
}
