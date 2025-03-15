import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import test from "node:test";
import Image from 'next/image';
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";


const goals = [
   {
    name: "Short-Term Goals",
    focusArea: "Building Expertise",
    text: "Enhance my full-stack development skills with a focus on Next.js, TypeScript, and scalable system architecture. Continue building real-world applications while improving problem-solving through data structures and algorithms.",
    avatar: memojiAvatar1,
  },
  {
    name: "Mid-Term Goals",
    focusArea: "Career Growth & Impact",
    text: "Secure a full-time developer role, contribute to open-source projects, and gain hands-on experience with cloud computing and DevOps. Expand my expertise in backend optimizations and system design.",
    avatar: memojiAvatar2,
  },
  {
    name: "Long-Term Goals",
    focusArea: "Leadership & Innovation",
    text: "Advance into a lead developer or technical architect role, explore SaaS entrepreneurship, and invest in real estate. Continue mentoring aspiring developers while building impactful, scalable products.",
    avatar: memojiAvatar3,
  },
];

export const FutureGoals = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
      <SectionHeader eyebrow="Future Roadmap" title="Where I See Myself Ahead" description="Don't just take my word for it. See what I aim to achieve in the coming years."/>
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
       {[...new Array(2)].fill(0).map(( _, index ) => (
    <Fragment key={index}>
          {goals.map((goal) => (
                <Card key={goal.name} className="max-w-xs md:max-w-md p-6 md:p-8 lg:max-w-2xl lg:p-10 hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <Image src={goal.avatar} alt={goal.name} className="max-h-full" />
                </div>
                <div>
                <div className="font-semibold"> {goal.name}</div>
                <div className="text-sm text-white/40" > {goal.focusArea}</div>
                </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base"> {goal.text}</p>
                </Card>
                   ))}
            </Fragment>
       ))} 

          </div>
        </div>
      </div>
    </div>
  );
};
