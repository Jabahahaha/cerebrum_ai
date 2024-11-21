"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Меню',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-emerald-500"
  },
  {
    label: 'Cerebrum GPT',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-emerald-500",
  },
  {
    label: 'Генерация Фотографий',
    icon: ImageIcon,
    color: "text-emerald-500",
    href: '/image',
  },
  {
    label: 'Генерация видео',
    icon: VideoIcon,
    color: "text-emerald-500",
    href: '/video',
  },
  {
    label: 'Генерация Музыки',
    icon: Music,
    color: "text-emerald-500",
    href: '/music',
  },
  {
    label: 'Генерация Кода',
    icon: Code,
    color: "text-emerald-500",
    href: '/code',
  },
  {
    label: 'Настройки',
    icon: Settings,
    color: "text-emerald-500",
    href: '/settings',
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#181818] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo211.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Cerebrum.ai
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-[#272727] rounded-lg transition",
                pathname === route.href ? "text-white bg-[#313131]" : "text-neutral-300",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      />
    </div>
  );
};
