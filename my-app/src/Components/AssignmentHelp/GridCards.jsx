import { FaLaptop, FaBook, FaGraduationCap } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

export default function GridCards() {
  const cards = [
    {
      title: "Assignment Completion",
      description: `Hire someone to handle your assignment or assist you to do assignments having assignment help will ensure the quality of your work. Thus, why expert the complete amount of it on your own when you can collaborate with one of our assignment experts in the UK ...`,
      icon: <FaLaptop size={40} />,
    },
    {
      title: "Dissertation Help",
      description: `We know all the difficulties you face while doing your dissertations. We have effective solutions to all your dissertation concerns. Take our services to release your stress.`,
      icon: <FaBookOpenReader size={40} />,
    },
    {
      title: "Research Paper Help",
      description: `We offer you complete assistance with your research paper. Our experienced editors and proofreaders are well-equipped with all the knowledge of research paper essentials.`,
      icon: <FaBook size={40} />,
    },
    {
      title: "Report Writing",
      description: `Impress your tutor with a polished, concise and impactful report that sets the stage for your academic success.`,
      icon: <FaGraduationCap size={40} />,
    },
  ];

  return (
    <div className="md:w-[75%] w-full mx-auto px-4">
      <div>
        <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary text-center">
          What Does Our Service Offer You?
        </h1>
        <p className="text-gray md:px-[9rem] pt-4 text-sm text-center">
          We are a prime paper editing help firm equipped with the professional
          knowledge needed to guide and support you in completing your academic
          project with flying colours. Get in touch with our reliable customer
          care representatives to get the answers to your queries. They are
          available 24/7 to make your experience a fruitful one!
        </p>
      </div>
      <div className="flex items-center justify-center pt-4 px-4">
        <a
          href={`https://wa.me/447397145697?text=${encodeURIComponent(
            "Hello British PhD Writers, I want to inquire about your services please."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row md:gap-6 items-center overflow-hidden group transition-all duration-500"
              >
                {/* Icon */}
                <div>
                  <div className="flex items-center justify-center w-[5.5rem] h-[5.5rem] bg-black group-hover:bg-white text-white group-hover:text-black rounded-full mb-4 transition-all duration-300 z-20 relative">
                    {card.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  {/* Title */}
                  <h2 className="text-lg text-center md:text-start font-bold mb-2 text-black group-hover:text-white transition-colors duration-500">
                    {card.title}
                  </h2>
                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center md:text-start group-hover:text-white transition-colors duration-500">
                    {card.description}
                  </p>
                </div>
                {/* Expanding Black Circle */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-black rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:bottom-0 group-hover:right-0"></div>
              </div>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
}
