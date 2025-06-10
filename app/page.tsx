import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">ClearEmail Ai</span>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section - Above the Fold */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">Stop Drowning in Your Inbox</Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              AI Email always finds a way to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                take over my day
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              ClearEmail Ai transforms your chaotic inbox into a calm, organized space. Our intelligent AI sorts your
              emails, delivers clear daily summaries, and instantly alerts you to what truly matters, helping you{" "}
              <strong className="text-slate-800">
                reclaim your focus and peace of mind without the hassle of complex setups or hefty price tags.
              </strong>
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Automated AI Sorting</h3>
                  <p className="text-sm text-slate-600">
                    Stop manually sifting through hundreds of emails. AI automatically categorizes into smart folders.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Daily Actionable Summaries</h3>
                  <p className="text-sm text-slate-600">
                    Get concise daily summaries without getting buried in threads and manual prioritization.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Bell className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Instant Critical Alerts</h3>
                  <p className="text-sm text-slate-600">
                    Never miss client inquiries or sales notifications. Get immediate alerts for urgent messages.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Set It and Forget It</h3>
                  <p className="text-sm text-slate-600">
                    Simple setup that works in the background, so you can focus on what truly matters.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section - The "Before" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Is Your "AI Email" Inbox a <span className="text-red-600">"Messy Unorganized Mailbox"</span> That's
                "Taking Over Your Life"?
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">The Daily Deluge</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You open your inbox each morning only for "AI Email" to "always find a way to take over my day."
                    Before you know it, you're "buried in threads, prioritizing messages, and pulling out action items
                    manually," feeling like you "waste my time, scrubbing through the inbox" instead of doing actual
                    work.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Critical Information Lost</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Despite your best efforts, you're constantly "missing key information such as client inquiries, or
                    sales call notifications." This leads to frustrating moments where you get "blindsided in meetings
                    about something that was buried in their inbox," or you're "prone to mistakes or unanswered emails"
                    that could cost you clients or opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Failed Solutions & Endless Manual Work</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You've tried everything – "Filters & labels (useful, but still a lot of manual work)" and even the
                    "Inbox Zero" mindset (good in theory, hard to maintain)." But these manual approaches are never
                    truly effective, leaving you asking, "Is there a better way of doing this?" You don't "wanna waste
                    my time" anymore.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-slate-100 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Belief Deconstruction</h3>
              <p className="text-slate-600 leading-relaxed">
                You might believe a truly organized "AI Email" inbox requires constant manual effort or complex,
                expensive software. Or that you simply have to accept your "messy unorganized mailbox" as an inevitable
                part of modern digital life. <strong className="text-slate-800">That's a myth.</strong> The problem
                isn't you; it's that traditional email tools aren't built to handle today's overwhelming "AI Email"
                volume intelligently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desired Outcome Section - The "After" */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Imagine a Clear, Productive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  "AI Email" Inbox
                </span>{" "}
                Where Nothing Slips By.
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-green-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Effortless Clarity</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Picture an "AI Email" inbox that's always organized, where every message lands exactly where it
                    should. No more digging, no more stress – just instant clarity and calm as you effortlessly navigate
                    your communications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Unwavering Focus</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Reclaim your "deep work" time. With ClearEmail Ai intelligently handling the noise, you can
                    concentrate on tasks that truly move the needle, confident that important messages will always find
                    you without interruption.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Always Informed, Never Overwhelmed</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Experience the peace of mind knowing you're always on top of client inquiries, sales leads, and
                    critical updates in your "AI Email" inbox, without feeling constantly tethered to your screen.
                    You'll never be "blindsided" again.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">New Paradigm Introduction</h3>
              <p className="text-slate-600 leading-relaxed">
                The secret isn't more manual effort or complex rules for your "AI Email" management. It's intelligent AI
                automation that learns and adapts to your needs. We've built a new way to interact with your email – a
                system that truly understands your inbox and ensures you don't have to waste another minute on email
                management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction Section - The "Bridge" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  ClearEmail Ai
                </span>
                : Your Intelligent Inbox Navigator
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                ClearEmail Ai uses cutting-edge AI to automatically sort your emails, deliver concise daily summaries,
                and ensure urgent messages get your immediate attention, effortlessly transforming your "AI Email"
                experience.
              </p>
            </div>

            {/* 3-Step Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">How It Works in 3 Simple Steps</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    1
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Connect Your Inbox Securely</h4>
                  <p className="text-slate-600">
                    Link your existing Gmail, Outlook, or other email account in minutes. ClearAI is designed for
                    privacy and ease of setup.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    2
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">AI Does the Work</h4>
                  <p className="text-slate-600">
                    ClearAI's intelligent AI instantly begins learning your email patterns and automatically sorting
                    incoming messages into smart, intuitive folders tailored to your needs.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    3
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Stay Informed & Focused</h4>
                  <p className="text-slate-600">
                    Receive clear daily summaries of your categorized "AI Email" and instant alerts for your most
                    important messages. Stop worrying about your inbox and start focusing on what truly matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Message */}
            <div className="bg-slate-50 p-8 rounded-xl mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  CEO
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Message from the Founder</h3>
                  <p className="text-slate-600 leading-relaxed italic">
                    "As a business owner, I personally experienced the daily dread of 'AI Email' overload. I was tired
                    of feeling like my inbox controlled my day, constantly worried about missing something crucial.
                    That's why I built ClearEmail Ai – to create the 'better way' I wished existed, and to help 'normal
                    people' like us reclaim our time and peace of mind from email chaos, simply and affordably."
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-gradient-to-br from-blue-600 to-green-600 p-12 rounded-xl text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Experience a Clearer "AI Email" Inbox?</h3>
              <p className="text-xl mb-8 opacity-90">
                Stop letting "AI Email" "take over your day." Join thousands of users who are transforming their email
                experience with ClearEmail Ai.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 text-lg font-semibold w-full sm:w-auto"
              >
                Start Your Free Trial Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ClearEmail Ai</span>
              </div>
              <p className="text-slate-400 mb-4">
                Transform your chaotic inbox into a calm, organized space with our intelligent AI email solution.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
