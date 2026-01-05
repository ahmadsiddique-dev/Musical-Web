import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

const projects = [
  {
    title: "The Art of Improvisation",
    description:
      "Join world-renowned jazz guitarists for a deep dive into music theory and the secrets behind fluid, melodic soloing.",
    link: "https://your-academy.com/webinars/improvisation",
  },
  {
    title: "Home Studio Mastery",
    description:
      "Learn how to capture professional-grade sound from your bedroom. We cover mic placement, acoustics, and basic DAW setups.",
    link: "https://your-academy.com/webinars/home-studio",
  },
  {
    title: "Vocal Health & Power",
    description:
      "A session dedicated to singers looking to expand their range and protect their voice during long performances and recording sessions.",
    link: "https://your-academy.com/webinars/vocal-health",
  },
  {
    title: "Piano for Songwriters",
    description:
      "Not a classical pianist? No problem. Learn the essential chords and patterns needed to write your own songs on the keys.",
    link: "https://your-academy.com/webinars/piano-songwriting",
  },
  {
    title: "Music Business 101",
    description:
      "From streaming royalties to booking your first gig, discover the essential steps to turning your passion into a sustainable career.",
    link: "https://your-academy.com/webinars/music-business",
  },
  {
    title: "Drum Pocket & Groove",
    description:
      "Master the art of the 'pocket.' Explore how to lock in with a bassist and drive a band's energy without overplaying.",
    link: "https://your-academy.com/webinars/drum-groove",
  },
];

const UpcommingWebinars = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export default UpcommingWebinars
