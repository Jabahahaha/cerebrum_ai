import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { getApiLimitCount, checkSubscription } from "@/utils/api"; // Ensure this file includes your API logic

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userId = "some_user_id"; // Replace this with logic to fetch the current user's ID
  const apiLimitCount = await getApiLimitCount(userId);
  const isPro = await checkSubscription(userId); // Add logic to check subscription status

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
