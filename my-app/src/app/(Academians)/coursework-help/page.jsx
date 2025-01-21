"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Head from "next/head";
import NavBannerBg from "@/Components/CourseworkHelp/NavBannerBg";

// Dynamically import components
const PubServices = dynamic(() => import("@/Components/AssignmentHelp/PubServices"));
const About = dynamic(() => import("@/Components/CourseworkHelp/About"));
const Footer = dynamic(() => import("@/Components/Footer"));
const StickyBtn = dynamic(() => import("@/Components/StickyBtn"));
const SingleButton = dynamic(() => import("@/Components/SingleButton"));
const GridCards = dynamic(() => import("@/Components/Home/GridCards"));
const Subjects = dynamic(() => import("@/Components/Home/Subjects"));
const Schedule = dynamic(() => import("@/Components/Home/Schedule"));
const Cta = dynamic(() => import("@/Components/Home/Cta"));
const Cta2 = dynamic(() => import("@/Components/Home/Cta2"));
const OurService = dynamic(() => import("@/Components/Home/OurService"));
const Review = dynamic(() => import("@/Components/Home/Review"));
const Faq = dynamic(() => import("@/Components/Home/Faq"));

const AssignmentHelpPage = () => {
  const aboutRef = useRef(null);
  const router = useRouter();

  const handleAboutClick = () => {
    router.push("/#about"); // Navigate to the home page with the '/about' URL
  };

  return (
    <div>
      <Head>
        <title>Coursework Help - British Phd Writers..</title>
      </Head>
      <NavBannerBg />
      <PubServices />
      <About ref={aboutRef} />
      <GridCards />
      <Subjects />
      <Schedule />
      <Cta />
      <OurService />
      <Cta2 />
      <Review />
      <Faq />
      <SingleButton />
      <Footer />
      <StickyBtn />
    </div>
  );
};

export default AssignmentHelpPage;
