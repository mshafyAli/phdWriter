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
            UK&apos;S Most Reliable & Affordable Essay Help
          </h1>
          <p className="pt-4 px-2 text-sm leading-6">
            The British PhD Writers is a company that is passionate about providing
            online essay help services at affordable pricing to students in
            United Kingdom. In collaboration with our outstanding academic
            expert in UK, we have so far supported several college students in
            achieving high marks in courses that they find challenging to
            comprehend. Putting all of one’s energy, time, and resources into
            something is extremely tough. We have helped a number of college
            students so far, using our top-notch essay specialists in United
            Kingdom, to achieve good results in courses that they have found
            tough to comprehend.
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
