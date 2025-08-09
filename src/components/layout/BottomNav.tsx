import { NavLink } from "react-router-dom";
import { BookOpen, Home, Megaphone, ShieldCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-3xl grid grid-cols-5 items-center px-4 py-2">
        <NavLink to="/" end className={linkCls} aria-label="Home">
          <div className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </div>
        </NavLink>

        <NavLink to="/noticeboard" className={linkCls} aria-label="Noticeboard">
          <div className="flex flex-col items-center gap-1">
            <Megaphone className="h-5 w-5" />
            <span className="text-xs">Notices</span>
          </div>
        </NavLink>

        <div className="flex items-center justify-center">
          <NavLink to="/permission">
            <Button variant="hero" aria-label="Open Permission Portal" className="shadow-elegant">
              <ShieldCheck className="mr-2" />
              Permission
            </Button>
          </NavLink>
        </div>

        <NavLink to="/resources" className={linkCls} aria-label="Resources">
          <div className="flex flex-col items-center gap-1">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">Learn</span>
          </div>
        </NavLink>

        <NavLink to="/account" className={linkCls} aria-label="Account">
          <div className="flex flex-col items-center gap-1">
            <User className="h-5 w-5" />
            <span className="text-xs">Account</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
