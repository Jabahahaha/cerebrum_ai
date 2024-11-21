const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

export const getApiLimitCount = async (userId: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/user-api-limits/${userId}`);
    if (!response.ok) {
      const error = await response.text(); // Log detailed server response
      console.error("Failed to fetch API limit count:", error);
      throw new Error("Failed to fetch API limit count");
    }
    const data = await response.json();
    return data.count || 0; // Default to 0 if no count is available
  } catch (error) {
    console.error("Error fetching API limit count:", error);
    throw error;
  }
};

// Increment the API limit for a user
export const incrementApiLimit = async (userId: string) => {
  const response = await fetch(`${BACKEND_URL}/api/user-api-limits/${userId}`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Failed to increment API limit");
  }
  return await response.json();
};

export const checkSubscription = async (userId: string) => {
    const response = await fetch(`${BACKEND_URL}/api/subscription-status/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch subscription status");
    }
    const data = await response.json();
    return data.isPro || false; // Default to false if no value is returned
  };
