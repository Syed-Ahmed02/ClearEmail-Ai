import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Zap,
  Bell,
  CheckCircle,
  ArrowRight,
  Clock,
  AlertTriangle,
  Target,
  Sparkles,
  Shield,
  BarChart3,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Hero from "@/components/Hero";
import Painpoints from "@/components/ui/painpoints-section";
import DesiresSection from "@/components/ui/desires-section";
import HowItWorks from "@/components/ui/how-it-works";
import Footer from "@/components/Footer";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <Painpoints />

      <DesiresSection />
      <HowItWorks />
      <div className="text-center bg-gradient-to-br from-blue-600 to-green-600 p-12  text-white">
      <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Experience a Clearer "AI Email" Inbox?</h3>

        <p className="text-xl mb-8 opacity-90">
          Stop letting "AI Email" "take over your day." Join thousands of users
          who are transforming their email experience with ClearEmail Ai.
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 text-lg font-semibold w-full sm:w-auto"
        >
          Start Your Free Trial Today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
      <Footer />
    </div>
  );
}
