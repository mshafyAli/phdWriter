"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Head from "next/head";
import NavBannerBg from "@/Components/AssignmentHelp/NavBannerBg";


// Dynamically import components
const About = dynamic(() => import("@/Components/AssignmentHelp/About"));
const StickyBtn = dynamic(() => import("@/Components/StickyBtn"));
const SingleButton = dynamic(() => import("@/Components/SingleButton"));
const GridCards = dynamic(() => import("@/Components/AssignmentHelp/GridCards"));
const Review = dynamic(() => import("@/Components/Home/Review"));
const Faq = dynamic(() => import("@/Components/Home/Faq"));
const Cta = dynamic(() => import("@/Components/AssignmentHelp/Cta"));
const PubServices = dynamic(() => import("@/Components/AssignmentHelp/PubServices"));
const Cta2 = dynamic(() => import("@/Components/Home/Cta2"));
const OurService = dynamic(() => import("@/Components/Home/OurService"));
const Footer = dynamic(() => import("@/Components/Footer"));











const AssignmentHelpPage = () => {
  const aboutRef = useRef(null);
  const router = useRouter();

  const handleAboutClick = () => {
    router.push("/#about"); // Navigate to the home page with the '/about' URL
  };

  

  return (
    <div>
      <Head>
        <title>Assignment Help - British Phd Writers..</title>
      </Head>
      <NavBannerBg/> 
      <About aboutRef={aboutRef} />
      <GridCards/>
      <Cta/>
      <PubServices/>
      <Review/>
      <Cta2/>
      <OurService/>
      <Faq/>
      <SingleButton />
      <Footer />
      <StickyBtn />
    </div>
  );
};

export default AssignmentHelpPage;
