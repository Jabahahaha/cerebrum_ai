"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



const testimonials = [
  {
    title: "Взаимодействуйте с сообществом",
    description: "Общайтесь с другими создателями и единомышленниками, чтобы создать сообщество вокруг вашего бренда. Делитесь своими любимыми изображениями, получайте отзывы и сотрудничайте с другими, чтобы улучшить свои навыки и создать еще лучший контент.",
  },
  {
    title: "Исследуйте свою креативность",
    description: "Раскройте свой творческий потенциал с помощью различных моделей и инструментов, которые помогут вам создавать уникальные и потрясающие изображения. Наш инструмент для создания изображений на основе искусственного интеллекта позволяет вам экспериментировать с различными стилями, чтобы воплотить свои идеи в жизнь.",
  },
  {
    title: "Сэкономьте время и деньги",
    description: "Благодаря нашим простым в использовании инструментам и шаблонам вы можете попрощаться с трудоемким программным обеспечением и поприветствовать более эффективный и экономичный способ создания потрясающих изображений.",
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
















 
