"use client"

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
//import { FiArrowRight } from "react-icons/fi";

const CozyGames = () => {
  return (
    <div className="p-4 md:p-8 bg-zinc-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        <Card
          heading="Small Defenders"
          description="Cozy tower defense game with an RTS feel."
          imgSrc="/images/bg-cozygames.png"
          link="/cozy/smalldefenders"
        />
        <Card
          heading="Mleep"
          description="Mleep fruit farmer simulator."
          imgSrc="/images/mleepfruit.png"
          link="/cozy/mleep"
        />
        {/* <Card
          heading="Coming Soon"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="/images/bg-cozygames.png"
          link="/cozy/smalldefenders"
        />
        <Card
          heading="Coming Soon"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="/images/bg-cozygames.png"
          link="/cozy/smalldefenders"
        /> */}
      </div>
    </div>
  );
};

const Card = ({
  heading,
  description,
  imgSrc,
  link,
}: {
  heading: string;
  description: string;
  imgSrc: string;
  link: string;
}) => {
  return (
    <Link href={`${link}`}>
    
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative rounded-xl"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-50 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 relative z-20 h-full text-white group-hover:text-white transition-colors duration-500 flex flex-col justify-between ">
        <ArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div className="backdrop-blur-md rounded-xl p-2">
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default CozyGames;