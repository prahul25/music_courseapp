"use client";
import React from "react";
import data from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

interface Course {
  id: number;
  title: String;
  slug: String;
  description: String;
  price: number;
  instructor: String;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const filteredFeaturedCourses = data.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="bg-gray-900 py-12">
      <div>
        <div className="text-center">
          <h2 className="text-teal-600 uppercase font-semibold text-xl tracking-wider">
            Featured Courses
          </h2>
          <p className="text-3xl mt-4 text-white leading-8 font-extrabold tracking-wid sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {filteredFeaturedCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[20px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="bg-white text-neutral-700 border-neutral-500 px-2 py-1 rounded-lg  hover:bg-orange-200 hover:text-black transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link
          href={"/courses"}
          className="text-neutral-700 bg-white border-neutral-600 px-4 py-2 rounded text-xl hover:bg-cyan-500 hover:text-white transition duration-200"
        >
          Browse All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
