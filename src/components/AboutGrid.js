import React from "react";

import AboutCarousel from "../components/AboutCarousel";
import AboutRow from "../components/AboutRow";
import AboutRowFeaturette from "../components/AboutRowFeaturette";
import Avatar1 from "../assets/avatars/avatar1.png";
import Avatar2 from "../assets/avatars/avatar2.png";
import Avatar3 from "../assets/avatars/avatar3.png";
import Avatar4 from "../assets/avatars/avatar4.png";
import Avatar5 from "../assets/avatars/avatar5.png";
import Avatar6 from "../assets/avatars/avatar6.png";
import Avatar7 from "../assets/avatars/avatar7.png";
import Avatar8 from "../assets/avatars/avatar8.png";
import Avatar9 from "../assets/avatars/avatar9.png";
import Carousel1 from "../assets/carousels/carousel1.jpg";
import Carousel2 from "../assets/carousels/carousel2.jpg";
import Carousel3 from "../assets/carousels/carousel3.jpg";
import Carousel4 from "../assets/carousels/carousel4.jpg";
import Carousel5 from "../assets/carousels/carousel5.jpg";
import Carousel6 from "../assets/carousels/carousel6.jpg";
import Carousel7 from "../assets/carousels/carousel7.jpg";
import Carousel8 from "../assets/carousels/carousel8.jpg";
import Carousel9 from "../assets/carousels/carousel9.jpg";


export default function AboutGrid(props) {
  return (
    <>
      <div className="main bg-warning text-dark">
        <AboutCarousel
          carousel_number={
            props.group === "1" ? "1" : props.group === "2" ? "2" : "3"
          }
          carousel_img1={
            props.group === "1"
              ? Carousel1
              : props.group === "2"
              ? Carousel4
              : Carousel7
          }
          carousel_img2={
            props.group === "1"
              ? Carousel2
              : props.group === "2"
              ? Carousel5
              : Carousel8
          }
          carousel_img3={
            props.group === "1"
              ? Carousel3
              : props.group === "2"
              ? Carousel6
              : Carousel9
          }
          head1={
            props.group === "1"
              ? "WebWizards"
              : props.group === "2"
              ? "Pixel Pioneers"
              : "Flawless Web Warden"
          }
          head2={
            props.group === "1"
              ? "CodeCrafters:"
              : props.group === "2"
              ? "Code Magicians"
              : "Rapid Click & Check"
          }
          head3={
            props.group === "1"
              ? "PixelPro"
              : props.group === "2"
              ? "Design Mavericks"
              : "Bug Bash Brigade"
          }
          para1={
            props.group === "1"
              ? "Pioneering Project Management Excellence"
              : props.group === "2"
              ? "Crafting Captivating Digital Experiences for Tomorrow's Web"
              : "Unleash Quality with Our Expert Web Testing Wizards!"
          }
          para2={
            props.group === "1"
              ? "Mastering Digital Project Alchemy"
              : props.group === "2"
              ? "Unleashing Interactive Wizardry with Cutting-Edge Web Designs"
              : "Lightning-Fast Web Testing for Seamless User Experiences!"
          }
          para3={
            props.group === "1"
              ? "Architecting Dreams, Delivering Realities"
              : props.group === "2"
              ? "Igniting Inspiration through Bold and Bespoke Web Solutions"
              : "Crush Glitches and Bugs with Supreme Web Testing Prowess!"
          }
        />
        <div className="container marketing">
          <AboutRow
            avatar1={
              props.group === "1"
                ? Avatar1
                : props.group === "2"
                ? Avatar4
                : Avatar7
            }
            avatar2={
              props.group === "1"
                ? Avatar2
                : props.group === "2"
                ? Avatar5
                : Avatar8
            }
            avatar3={
              props.group === "1"
                ? Avatar3
                : props.group === "2"
                ? Avatar6
                : Avatar9
            }
            head1={
              props.group === "1"
                ? "avatar1"
                : props.group === "2"
                ? "avatar4"
                : "avatar7"
            }
            head2={
              props.group === "1"
                ? "avatar2"
                : props.group === "2"
                ? "avatar5"
                : "avatar8"
            }
            head3={
              props.group === "1"
                ? "avatar3"
                : props.group === "2"
                ? "avatar6"
                : "avatar9"
            }
            para1={
              props.group === "1"
                ? "His strategic vision turns chaos into harmony, delivering milestones with precision and teamwork."
                : props.group === "2"
                ? "Gracefully crafting online elegance, this web diva turns visions into pixel-perfect realities. #DesignEmpress"
                : "Bugs beware! This web wizard hunts glitches, ensuring seamless user experiences with precision testing."
            }
            para2={
              props.group === "1"
                ? "A master of efficiency, she steers projects with finesse, ensuring success in every endeavor."
                : props.group === "2"
                ? "A tech sorceress, weaving code and creativity, conjuring sites that captivate and inspire. #DigitalEnchantress"
                : "Code detective, unraveling errors with finesse. Empowering websites to shine, leaving no bug unturned."
            }
            para3={
              props.group === "1"
                ? "A multitasking virtuoso, he orchestrates projects, inspiring growth and meeting deadlines with grace."
                : props.group === "2"
                ? "Meet the web architect with a flair, infusing innovation and style, building online wonders. #TechMaven"
                : "Navigating the digital labyrinth, a master of user-centric scrutiny, crafting flawlessness in every click."
            }
          />
          <hr className="featurette divider" style={{margin: "5rem 0", padding: "2.5rem 0", marginBottom: 0}}/>
          <AboutRowFeaturette
            head={
              props.group === "1"
                ? "Mastering the Symphony: "
                : props.group === "2"
                ? "Web Wizardry: "
                : "Web Warrior: "
            }
            span={
              props.group === "1"
                ? "The Art of Project Management."
                : props.group === "2"
                ? "Unleashing the Power of Design."
                : "Unleashing the Power of Web Testing"
            }
            para={
              props.group === "1"
                ? "As a project manager, I'm the conductor of success, orchestrating teams to harmonize efficiency, innovation, and excellence."
                : props.grup === "2"
                ? "Step into the digital realm where creativity knows no bounds! I'm your web designer extraordinaire, crafting pixel-perfect experiences that leave a lasting impression."
                : "Ready to uncover digital wonders? Step into the shoes of a web tester and explore the virtual realm of endless possibilities!"
            }
            order1="0"
            order2="0"
            avatar={
              props.group === "1"
                ? Avatar1
                : props.group === "2"
                ? Avatar4
                : Avatar7
            }
          />
          <hr className="featurette divider" style={{margin: "5rem 0", padding: "2.5rem 0", marginBottom: 0}}/>
          <AboutRowFeaturette
            head={
              props.group === "1"
                ? "Navigating Success: "
                : props.group === "2"
                ? "Designing the Digital World: "
                : "Mastering the Web: "
            }
            span={
              props.group === "1"
                ? "The Project Manager's Guide"
                : props.group === "2"
                ? "A Web Designer's Guide"
                : "Testing Tactics for Success"
            }
            para={
              props.group === "1"
                ? "Picture a project soaring to new heights – that's what I do. As a project manager, I lead the charge for triumphant outcomes."
                : props.group === "2"
                ? "Welcome to the world of stunning web designs! I'm the mastermind behind captivating online experiences, transforming visions into reality with every click."
                : "Calling all tech adventurers! Become a web tester and embark on a thrilling journey through the intricacies of the online universe."
            }
            order1="2"
            order2="1"
            avatar={
              props.group === "1"
                ? Avatar2
                : props.group === "2"
                ? Avatar5
                : Avatar8
            }
          />
          <hr className="featurette divider" style={{margin: "5rem 0", padding: "2.5rem 0", marginBottom: 0}}/>
          <AboutRowFeaturette
            head={
              props.group === "1"
                ? "Project Prowess: "
                : props.group === "2"
                ? "Pixel Perfect: "
                : "Web Testing Wizardry: "
            }
            span={
              props.group === "1"
                ? "Leading with Precision and Purpose"
                : props.group === "2"
                ? "Mastering Web Design for Impactful Experiences"
                : "Unraveling Bugs with Finesse"
            }
            para={
              props.group === "1"
                ? "With a passion for strategy and a knack for collaboration, I'm the project manager who turns visions into tangible victories."
                : props.group === "2"
                ? "Ready to elevate your online presence? Meet your web design guru, blending aesthetics and functionality seamlessly to create sites that stand out in the virtual crowd."
                : "Love problem-solving and the web? As a web tester, you'll be the hero who ensures seamless digital experiences for all!"
            }
            order1="0"
            order2="0"
            avatar={
              props.group === "1"
                ? Avatar3
                : props.group === "2"
                ? Avatar6
                : Avatar9
            }
          />

          <hr className="featurette divider" style={{margin: "5rem 0", padding: "2.5rem 0", marginBottom: 0}}/>
        </div>
      </div>
    </>
  );
}
