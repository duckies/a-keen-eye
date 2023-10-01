"use client";

import { formatUTCDate, getCurrentSchedule } from "@/lib/schedule";
import { type Variants, motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Events() {
  const events = getCurrentSchedule();

  return (
    <div>
      <div className="min-h-screen p-10 md:p-20">
        <div className="mb-7 flex-row flex-wrap md:flex-nowrap flex gap-x-5 gap-y-5">
          <div className="flex shrink-0 basis-full md:basis-auto justify-center items-center content-center">
            <Image
              src="https://wow.zamimg.com/images/wow/icons/large/trade_archaeology.jpg"
              alt="Achievement icon of papers and magnifying glass"
              width="56"
              height="56"
              className="border-2 border-lime-200 rounded-md"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl mb-2">
              <a
                href="https://www.wowhead.com/achievement=10603/a-keen-eye"
                target="_blank"
                rel="noreferrer"
                className="text-lime-200"
              >
                A Keen Eye
              </a>{" "}
              Achievement Schedule
            </h1>
            <p>
              I keep forgetting to check the schedule and rummage through the
              comments, so I made a schedule that should stay updated by itself.
            </p>
          </div>
        </div>

        <motion.div
          className="grid lg:grid-cols-2 gap-3 w-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {events.map((event, i) => (
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="flex-grow"
              key={event.start.getTime()}
            >
              <div className="flex gap-x-3 rounded-lg w-full border-2 border-lime-200/20 bg-neutral-900 px-5 py-4">
                <div>
                  <span className="text-4xl text-lime-200">{event.order}</span>
                </div>
                <div>
                  <a
                    className="text-xl font-semibold text-lime-200"
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {event.name}
                    {i === 0 && " (Active)"}
                  </a>
                  <p>
                    {formatUTCDate(event.start)} - {formatUTCDate(event.end)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
