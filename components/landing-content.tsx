"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";



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
    
    <div className="px-10 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#222222] border-none text-zinc-400 text-center">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-white text-lg text-center">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
