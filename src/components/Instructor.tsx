"use client"

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background"

const instructors = [
  {
    id: 1,
    name: "Dr. Arshman Khan",
    designation: "Head of Piano & Theory",
    image: "https://ahmadsiddique.vercel.app/assets/profile.png",
  },
  {
    id: 2,
    name: "Ayesha Siddiqui",
    designation: "Vocal Coach & Jazz Artist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 3,
    name: "Zain Ahmed",
    designation: "Lead Guitarist & Producer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 4,
    name: "Sarah Malik",
    designation: "Classical Violinist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 5,
    name: "Omar Farooq",
    designation: "Drums & Percussion Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: 6,
    name: "Maya Ali",
    designation: "Music Business Mentor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

const Instructor = () => {
  return (
    <div className="relative h-180 gap-12 overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Meet Our Instructors
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Discover the talented Professional who will guide your musical journey
      </p>
      <div className="flex mt-8 flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={instructors} />
    </div>
    </WavyBackground>
    </div>
  )
}

export default Instructor
