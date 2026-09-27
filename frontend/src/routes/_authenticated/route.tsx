import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getAuthToken } from "@/lib/auth";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    if (!getAuthToken()) throw redirect({ to: "/auth" });
    return {};
  },
  component: () => <Outlet />,
});
