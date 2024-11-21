"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



const testimonials = [
  {
    title: "Engage with the community",
    description: "Connect with other creators and like-minded people to build a community around your brand. Share your favorite images, get feedback, and collaborate with others to improve your skills and create even better content.",
  },
  {
    title: "Explore your creativity",
    description: "Unleash your creativity with a variety of models and tools to help you create unique and stunning images. Our AI-powered image maker lets you experiment with different styles to bring your ideas to life.",
  },
  {
    title: "Save time and money",
    description: "With our easy-to-use tools and templates, you can say goodbye to time-consuming software and hello to a more efficient and cost-effective way to create stunning images.",
  },
];

export const LandingContent = () => {
  return (
    <div className="mt-10 pb-20 md:pb-10  mx-10 sm:mx-10 md:mx-10 md:max-w-[1200px] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 w-full">
        {testimonials.map((item) => (
          <div key={item.description} className="text-zinc-400 text-left p-0 w-full">
            <h3 className="text-lg text-white font-semibold leading-none tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground pt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
















 
