"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  FaPython,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiBurpsuite } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { SiParrotsecurity } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiScrum } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


export const ContainerScroll = ({
  // users,
  titleComponent,
}: {
  // users: {
  //   name: string;
  //   designation: string;
  //   image: string;
  //   badge?: string;
  // }[];
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };
  // Elimine la animación del panel de tecnologías ya que no se ve bien, y por optimizar la pagina. 
  // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  // const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  // const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = 1;
  const scale = 1; 
  const translate = -82;

  return (
    <div
      className="h-[50rem] md:h-[60rem] flex items-center justify-center relative p-2 md:p-10" // Decreased padding for medium screens and above
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        // users={users}
        />
        
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
}: // users,
  {
    rotate: any;
    scale: any;
    translate: any;
    // users: {
    //   name: string;
    //   designation: string;
    //   image: string;
    //   badge?: string;
    // }[];
  }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow: "0 0 20px 10px #323232", // Green shadow
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div
        className="h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden p-4"
        style={{
          background: "#bdc3c7" /* fallback for old browsers */,
          backgroundImage:
            "-webkit-linear-gradient(to right, #2c3e50, #bdc3c7)" /* Chrome 10-25, Safari 5.1-6 */,
          // backgroundImage: "linear-gradient(to right, #2c3e50, #bdc3c7)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }}
      >
        <div className="flex justify-center items-center">
          <FaGitAlt className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <TbBrandCpp className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <FaPython className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <DiDjango className="text-7xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <SiPostgresql className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <DiMysql className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <SiGnubash className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <SiBurpsuite className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <SiKalilinux className="text-7xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <FaLinux className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <SiParrotsecurity className="text-6xl text-black" />
        </div>
        <div className="flex justify-center items-center">
          <DiScrum className="text-6xl text-black" />
        </div>

        {/* Add more icons wrapped in centered divs */}
      </div>
    </motion.div>
  );
};

{
  /* <div
        className="h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4"
        style={{
          background: "#076585 linear-gradient(to right, #076590, #fff)",
        }}
      ></div> */
}
