"use client";

import * as z from "zod";
import axios from "axios";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];
      
      const response = await axios.post('/api/conversation', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);
      
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Что-то пошло не так :(");
      }
    } finally {
      router.refresh();
    }
  }

  return ( 
    <div>
      <Heading
        title="Somoni GPT"
        description="Наша самая продвинутая языковая модель"
        icon={MessageSquare}
        iconColor="text-emerald-500"
        bgColor="bg-neutral-800"
      />
      <div className="px-4 lg:px-8,">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-lg 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
                bg-[#2c2c2c]
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 bg-[#2c2c2c] outline-none focus-visible:ring-0 focus-visible:ring-transparent text-white"
                        disabled={isLoading} 
                        placeholder="Почему Роналду красавчик, а Пепси гном?" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button variant="superpremium" className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Сгенерировать
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-[#464646]">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="Начните разговор." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div 
                key={message.content} 
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-[#2c2c2c] text-white border border-transparent" : "bg-[#464646]",
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm, text-white">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ConversationPage;

