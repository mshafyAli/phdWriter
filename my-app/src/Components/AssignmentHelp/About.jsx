


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
        <article className="md:w-[50%] w-full">
          <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary ">
            Why Choose Our{" "}
            <span className="text-secondary"> Assignment Expert</span>{""}?
          </h1>
          <p className="pt-4 px-2 text-sm leading-6">
            British PhD Writers  keenly understands the challenges of
            Students life. Everyone is packed up with heaps of different
            concerns about life matters;you are deal those as well as your hang
            out to live your blessed life joyfully. Tons of Assignment at a time
            are stopping you to do so? Leave that on us. We will assure that
            your Assignment reputation will prosper while you would be paying
            attention to all other important living matters. We are your
            companions, always standing with you for Assignment editing. At our
            desk, you will get a Assignment consultancy with free guidance and
            100% plagiarism free and proofreaded. We bring all this with an
            extensive range of subject expertise, covering almost every aspect
            comes under your domain.
          </p>

          <ReviewsAndWhatsApp />
        </article>

        {/* Image Section */}
        <div className="flex-1 w-full hidden md:block">
          <Image
            src="/aboutPic.webp"
            alt="About"
            className="w-[360px] mx-auto  object-contain "
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
