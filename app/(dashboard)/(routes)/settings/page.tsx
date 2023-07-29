import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div>
      <Heading
        title="Настройки"
        description="Управление настройками учетной записи."
        icon={Settings}
        iconColor="text-emerald-500"
        bgColor="bg-neutral-800"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-white text-sm">
          {isPro ? "В настоящее время вы находитесь на тарифном плане Pro." : "В настоящее время вы находитесь на бесплатном тарифном плане."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
   );
}
 
export default SettingsPage;

