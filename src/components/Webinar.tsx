'use client'
import Link from "next/link";
import webinarData from "@/data/webinar_data.json";
import { HoverEffect } from "./ui/card-hover-effect";

function Webinar() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:6">
        <div className="text-center">
          <h2 className="uppercase text-xl text-teal-600 tracking-wider font-semibold">
            featured Webinar
          </h2>
          <p className="text-3xl mt-4 text-white leading-8 font-extrabold tracking-wid sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={webinarData.featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description:webinar.description,
              link:webinar.slug
            }))}
          ></HoverEffect>
        </div>
        <div className="text-center mt-10">
          <Link
            href={"/courses"}
            className="text-neutral-700 bg-white border-neutral-600 px-4 py-2 rounded text-xl hover:bg-cyan-500 hover:text-white transition duration-200"
          >
            View All Webinar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Webinar;
