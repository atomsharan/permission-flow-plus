import { NavLink } from "react-router-dom";
import { BookOpen, Home, Megaphone, ShieldCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 shadow-elegant">
      <div className="mx-auto max-w-3xl grid grid-cols-5 items-center px-4 py-3">
        <NavLink to="/student/dashboard" end className={linkCls} aria-label="Home">
          <div className="flex flex-col items-center gap-1.5 transition-transform hover:scale-110">
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Home</span>
          </div>
        </NavLink>

        <NavLink to="/student/noticeboard" className={linkCls} aria-label="Noticeboard">
          <div className="flex flex-col items-center gap-1.5 transition-transform hover:scale-110">
            <Megaphone className="h-6 w-6" />
            <span className="text-xs font-medium">Notices</span>
          </div>
        </NavLink>

        <div className="flex items-center justify-center -mt-4">
          <NavLink to="/student/permission">
            <Button 
              variant="hero" 
              size="lg"
              aria-label="Open Permission Portal" 
              className="shadow-glow rounded-full px-6 py-6"
            >
              <ShieldCheck className="h-5 w-5" />
            </Button>
          </NavLink>
        </div>

        <NavLink to="/student/resources" className={linkCls} aria-label="Resources">
          <div className="flex flex-col items-center gap-1.5 transition-transform hover:scale-110">
            <BookOpen className="h-6 w-6" />
            <span className="text-xs font-medium">Learn</span>
          </div>
        </NavLink>

        <NavLink to="/student/account" className={linkCls} aria-label="Account">
          <div className="flex flex-col items-center gap-1.5 transition-transform hover:scale-110">
            <User className="h-6 w-6" />
            <span className="text-xs font-medium">Account</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
