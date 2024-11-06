import {LandingPageNavbar} from "@/components/navigation/LandingPageNavbar";
import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "react-hot-toast";

export function RootComponent() {
  return (
    <div className="content min-h-screen w-full">
      <LandingPageNavbar />
      <Outlet />
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <TanStackRouterDevtools position="bottom-left" />
      <Toaster reverseOrder />
      <TailwindIndicator/>
    </div>
  );
}
