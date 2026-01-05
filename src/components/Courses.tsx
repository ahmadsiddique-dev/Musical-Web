"use client";
import Link from "next/link";
import CourseData from "../data/music_courses.json";
import ColourfulText from "./ui/colourful-text";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const Courses = () => {
  let courses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 mask-b-from-95% mask-t-from-95% bg-gray-900">
      <div>
        <div className="text-center">
          <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h1>
          <p className="mt-2 text-3xl py-4 md:text-5xl  leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the <ColourfulText text="Best" />
          </p>
        </div>
      </div>
      <div className="mt-10 max-w-[92vw] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md: lg:grid-cols-3 gap-8 justify-center">
          {courses.map((course) => (
            <div key={course.id} className="justify-center items-center">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                src={`/${course.image}`}
                alt="jordans"
                height="350"
                width="350"
                className="object-contain mix-blend-lighten rounded-2xl"
              />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                 {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <Link href={`/course/${course.slug}`} >Buy Now</Link>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    {course.price}
                  </span>
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
};

export default Courses;
