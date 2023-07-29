import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 10;

export const tools = [
  {
    label: 'Somoni GPT',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-emerald-500",
  },
  {
    label: 'Генерация Музыки (В Разработке)',
    icon: Music,
    href: '/music',
    color: "text-emerald-500",
  },
  {
    label: 'Генерация Картинок (В Разработке)',
    icon: ImageIcon,
    color: "text-emerald-500",
    href: '/image',
  },
  {
    label: 'Генерация Видео (В Разработке)',
    icon: VideoIcon,
    color: "text-emerald-500",
    href: '/video',
  },
  {
    label: 'Генерация Кода (В Разработке)',
    icon: Code,
    color: "text-emerald-500",
    href: '/code',
  },
];
