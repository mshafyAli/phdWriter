"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Navbar from "@/Components/Navbar";

// Dynamically import components
const ReviewBanner = dynamic(() => import("@/Components/ReviewBanner"));
const ReviewCards = dynamic(() => import("@/Components/ReviewCards"));
const Footer = dynamic(() => import("@/Components/Footer"));
const StickyBtn = dynamic(() => import("@/Components/StickyBtn"));

const ReviewPage = () => {
  const router = useRouter();



  const handleAboutClick = () => {
    router.push("/#about");
  };

  const handleContactClick = () => {
    router.push("/#contact-us");
  };

  return (
    <div>
      <Head>
        <title>Reviews - British Phd Writers.</title>
      </Head>

      <Navbar
        handleAboutClick={handleAboutClick}
        handleContactClick={handleContactClick}
      />
      <ReviewBanner />
      <ReviewCards />
      <Footer />
      <StickyBtn />
    </div>
  );
};

export default ReviewPage;
