import React, { useRef } from "react";
import Section from "./Section";
import curve from "../assets/hero/curve.png";
import robot from "../assets/hero/robot.jpg";
import Button from "./Button";
import { heroBackground } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants/index";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset=" lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI Chatting with <br />
            <span className="inline-block  relative">
              Brainwave
              <img
                width={624}
                height={28}
                src={curve}
                alt="hero img"
                className="absolute top-full left-0 w-full xl:mt-2"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mb-6 mx-auto text-n-2 lg:mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            a similique neque rem.
          </p>
          <Button href="#pricing" white>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] md:max-w-5xl mx-auto xl:mb-24">
          <div className="relative z-1 p-0.5 bg-conic-gradient rounded-2xl">
            <div className="bg-n-8 relative rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:ascpect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="roboAi"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, i) => (
                      <li className="p-5" key={i}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="lorem ipsuming"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
