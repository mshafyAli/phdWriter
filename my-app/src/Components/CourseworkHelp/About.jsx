import Image from "next/image";
import React, { forwardRef } from "react";
import ReviewsAndWhatsApp from "../ReviewsAndWhatsApp";

const About = forwardRef((props, ref) => {
  return (
    <section
      className="md:w-[75%] w-full mx-auto mt-12 md:mb-10 px-4"
      ref={ref}
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Article Section */}
        <article className="md:w-1/2 w-full">
          <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary ">
            UK&apos;S Most Reliable & Affordable Coursework Help
          </h1>
          <p className="pt-4 px-2 text-sm leading-6">
            The British PhD Writers is the most reliable and affordable destination for
            coursework help! Our top-notch coursework experts are dedicated to
            assisting you with all your academic needs. Whether you need someone
            to do your coursework, write your coursework from scratch, or just
            require help with coursework details, we&apos;ve got you covered. Pay to
            do your coursework with us and experience high-quality assistance
            tailored to your requirements. Trust our experienced coursework
            writers to deliver exceptional results at affordable prices. Choose
            The British PhD Writers for reliable and professional coursework help that
            ensures your academic success!
          </p>

          <ReviewsAndWhatsApp />
        </article>

        {/* Image Section */}
        <div className="flex-1 w-full hidden md:block">
          <Image
            src="/aboutPic.webp"
            alt="About"
            className="w-[330px] mx-auto  object-contain"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
});

// Assign display name for debugging
About.displayName = "About";

export default About;
