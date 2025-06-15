import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import {
  SignedOut,
  SignInButton,
  UserButton,
  SignedIn,
  SignUpButton,
} from "@clerk/nextjs";
export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">
            ClearEmail Ai
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="hidden sm:flex">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="default" className="hidden sm:flex">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
