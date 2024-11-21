import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount, checkSubscription } from "@/utils/api"; // Updated imports

const Navbar = async () => {
  const userId = "some_user_id"; // Replace this with logic to get the current user's ID
  const apiLimitCount = await getApiLimitCount(userId);
  const isPro = await checkSubscription(userId);

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
