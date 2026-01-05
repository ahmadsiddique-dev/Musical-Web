"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The personalized attention I received here is unmatched. I went from barely knowing how to read notes to performing my first piano recital in just six months!",
    name: "Sarah Chen",
    title: "Piano Student",
  },
  {
    quote:
      "As an adult learner, I was nervous about starting the violin. The instructors made me feel so comfortable and tailored the pace perfectly to my busy schedule.",
    name: "Michael Ross",
    title: "Violin Student",
  },
  {
    quote:
      "The community here is incredible. Not only have my vocal techniques improved drastically, but I've also found a group of people who share my absolute passion for soul music.",
    name: "Emily Rodriguez",
    title: "Vocal Student",
  },
  {
    quote:
      "Finding a drum teacher who understands both jazz and rock is rare. The curriculum here is versatile and actually prepares you for real-world gigging and performance.",
    name: "Chris Taylor",
    title: "Drums Student",
  },
];

const Testimonial = () => {
  return (


    <div className="relative flex h-120 w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="h-120 w-full  dark:bg-grid-white/[0.2] relative flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-xl sm:text-3xl my-4 text-white shadow-lg ">Hear our Harmony: Voices of Success</h2>
      <div className="w-full justify-center flex overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
