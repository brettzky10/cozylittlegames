import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const BasicFAQ = () => {
  return (
    <div className="px-4 py-12 bg-zinc-800">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold text-white">
          Frequently asked questions
        </h3>
        <Question title="Are your games free?" defaultOpen>
          <p>
            Yes, the demo of our games are free to play!
          </p>
        </Question>
        <Question title="I like a game, can I request more content?">
          <p>
            Yes, by backing our patreon, you will be able to support us in creating new content. Allowing you to try content and games before they are released.
          </p>
        </Question>
        <Question title="How often are these games updated?">
          <p>
            Currently I am a solo developer working on these projects and a few others, my goal is to continue building out features for the games if I see people enjoying the demo.
          </p>
        </Question>
        <Question title="I'm a streamer, do you have a media package for promoting each game?">
          <p>
            At the current moment, no, but feel free to reach out to me in the <a href="/feedback" className="underline">feedback page</a> and I'll do my best to put something together for you.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "#FFFFFF",
            },
          }}
          className="bg-gradient-to-r from-green-300 to-emerald-600 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "#FFFFFF",
            },
            closed: {
              rotate: "0deg",
              color: "#FFFFFF",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-400"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;