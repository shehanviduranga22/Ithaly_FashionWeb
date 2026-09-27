import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { clearAuthSession, getStoredUser } from "@/lib/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = getStoredUser();
    setUser(
      stored
        ? ({
            id: stored.id,
            email: stored.email,
            user_metadata: { full_name: stored.fullName },
          } as User)
        : null,
    );
  }, []);

  return {
    user,
    loading,
    signOut: () => {
      clearAuthSession();
      setUser(null);
    },
  };
}
