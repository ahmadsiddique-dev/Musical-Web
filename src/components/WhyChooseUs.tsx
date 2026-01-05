"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Master Your Craft",
    description:
      "Learn from world-class musicians and certified instructors. Our curriculum is designed to take you from total beginner to stage-ready performer with structured, easy-to-follow lessons that cover theory, technique, and performance.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/9.jpg"
          width={450}
          height={450}
          className="h-full w-full object-cover"
          alt="Student practicing guitar with a tablet"
        />
      </div>
    ),
  },
  {
    title: "Learn at Your Own Pace",
    description:
      "Life gets busy, but your passion shouldn't suffer. Access your courses 24/7 on any device. Whether you have 10 minutes or 2 hours, our bite-sized modules allow you to practice whenever and wherever it suits you best.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/10.jpg"
          width={450}
          height={450}
          className="h-full w-full object-cover"
          alt="Student practicing guitar with a tablet"
        />
      </div>
    ),
  },
  {
    title: "Interactive Feedback",
    description:
      "Don't just watch videos—interact! Submit your practice recordings and receive personalized feedback from our instructors. Our platform bridges the gap between digital learning and a personal tutor, ensuring you never build bad habits.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/8.jpg"
          width={450}
          height={450}
          className="h-full w-full object-cover"
          alt="Student practicing guitar with a tablet"
        />
      </div>
    ),
  },
  {
    title: "Global Community",
    description:
      "Join a vibrant community of fellow music lovers. Participate in monthly challenges, join live Q&A sessions, and share your progress with students from around the world. You’re not just buying a course; you’re joining a band.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/7.jpg"
          width={450}
          height={450}
          className="h-full w-full object-cover"
          alt="Student practicing guitar with a tablet"
        />
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
