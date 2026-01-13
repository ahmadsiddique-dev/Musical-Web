"use client"

import { toast } from 'sonner'
import { BackgroundBeams } from "@/components/ui/background-beams"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"

const page = () => {
  const placeholders = [
  "How do I start learning the Piano as a beginner?",
  "Which guitar is best for acoustic folk music?",
  "What are the essential music theory scales for jazz?",
  "How to record professional vocals at home?",
  "What is the difference between a major and minor chord?",
  "Find the best violin courses for intermediate players",
];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setTimeout(() => {
      toast.info("Sorry! we are not accepting submitions currently.")
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative mb-24 z-10 text-lg md:text-7xl te  bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Ask Us anything?
        </h1>
        <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default page
