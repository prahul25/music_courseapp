"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import {CommunityImg, FeedbackImg, InstructorImg, InteractiveImg, LearningImg} from "@/images/index"

const content = [
  {
    title: "Expert Instructors",
    description:
      "Our courses are led by seasoned professionals with extensive experience in the music industry. Benefit from their deep knowledge and insights, ensuring you receive top-notch education and guidance. Learn industry secrets and techniques that only experts can provide. Gain confidence in your skills with mentorship from those who have been where you want to go.",
    content: (
     
        <Image
          src={InstructorImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      
    ),
  },
  {
    title: "Flexible Learning",
    description:
      "Our platform offers 24/7 access to course materials, allowing you to learn at your own pace. Whether you're an early bird or a night owl, our courses fit into your schedule seamlessly. No need to rush or worry about deadlines; study when it’s convenient for you. Enjoy the freedom of learning from anywhere, anytime.",
    content: (
      <Image
      src={LearningImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"/>
    ),
  },
  {
    title: "Community Support",
    description:
    "Join a vibrant community of learners and professionals in the music industry. Share your experiences, ask questions, and collaborate on projects. Our platform fosters a sense of belonging and support among members. Engage in discussions and form connections that can last a lifetime.",
    content: (
      <Image
      src={CommunityImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"/>
    ),
  },
  {
    title: "Personalized Feedback",
    description:
    "Receive detailed, personalized feedback from expert instructors on your work. Our instructors are committed to helping you grow and reach your full potential. Understand your strengths and areas for improvement with constructive critiques. Benefit from one-on-one interactions that tailor advice to your unique needs and goals.",
    content: (
      <Image
      src={FeedbackImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"/>
    ),
  },
  {
    title: "Interactive Lessons",
    description:
    "Engage with content that is designed to be both educational and enjoyable. Our lessons include videos, quizzes, and practical exercises to enhance retention. Experience an immersive learning environment that encourages active participation. See your progress in real time and stay motivated throughout your journey.",
    content: (
      <Image
      src={InteractiveImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"/>
    ),
  }
];
export function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
