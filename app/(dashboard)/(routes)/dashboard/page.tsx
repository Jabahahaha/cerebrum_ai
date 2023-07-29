"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl text-white md:text-4xl font-bold text-center">
        Изучите возможности ИИ
        </h2>
        <p className="text-[#adadad] font-light text-sm md:text-lg text-center">
        Общайтесь с самым умным ИИ - Испытайте силу ИИ
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer, bg-[#353535]">
            <div className="flex items-center gap-x-4, bg-[#353535]">
              <div className={cn("p-2 w-fit rounded-md, bg-[#353535]")}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold, text-white">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5, text-white" />
          </Card>
        ))}
      </div>
    </div>
  );
}
