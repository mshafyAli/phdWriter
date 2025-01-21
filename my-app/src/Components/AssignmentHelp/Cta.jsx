import React from "react";
import ReviewsAndWhatsApp from "../ReviewsAndWhatsApp";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Cta = () => {
  return (
    <div className="banner1 w-full  h-auto my-6  ">
      <div className="md:w-[80%] w-[90%] mx-auto">
        {/* Use flex-row and justify-end to align content to the right */}
        <div className="flex flex-col md:flex-row justify-end items-center md:items-end ">
          <div className="w-full md:w-[50%] md:py-16 py-8">
            {/* Heading */}
            <h1 className="text-xl md:text-3xl font-bold text-white text-center md:text-start md:pl-8 pl-0 md:text-primary">
            UK Native Editors & Writer to the Rescue
            </h1>

            {/* List of FAQ points */}
            {[
              "Experts from respective fields make certain that every requirement is read inch by inch and catered exactly according to the parameters mentioned by each client.",
              "Our Industry specialists are trained to ensure that all criteria are met with before final delivery.",
              "After you’re done with this round, you’re definitely going to be pleased! Our free revisions are set in place to help deliver clients exactly what they ask for.",
              "Rest assured our services and highly secure and kept confidential with respect to each client. No information is shared with any third party.",
            ].map((text, index) => (
              <div className="flex items-center gap-2 pt-4" key={index}>
                <IoArrowForwardCircleOutline className="w-7 h-7 md:text-primary text-secondary" />{" "}
                {/* Set size and color */}
                <p className="md:text-gray text-white tex-sm w-full">
                  {" "}
                  {/* Adjust text size if necessary */}
                  {text}
                </p>
              </div>
            ))}

            

            <ReviewsAndWhatsApp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
