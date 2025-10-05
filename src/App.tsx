import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Noticeboard from "./pages/Noticeboard";
import Permission from "./pages/Permission";
import Resources from "./pages/Resources";
import Account from "./pages/Account";
import CampusConnect from "./pages/CampusConnect";
import StaffDashboard from "./pages/staff/StaffDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/student/dashboard" element={<Index />} />
          <Route path="/student/noticeboard" element={<Noticeboard />} />
          <Route path="/student/permission" element={<Permission />} />
          <Route path="/student/resources" element={<Resources />} />
          <Route path="/student/account" element={<Account />} />
          <Route path="/campus-connect" element={<CampusConnect />} />
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
          <Route path="/staff/noticeboard" element={<Noticeboard />} />
          <Route path="/staff/permission" element={<Permission />} />
          <Route path="/staff/resources" element={<Resources />} />
          <Route path="/staff/account" element={<Account />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
