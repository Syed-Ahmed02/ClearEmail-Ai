import { Card, CardContent } from "./card";
import { Clock, AlertTriangle, Target } from "lucide-react";

export default function Painpoints() {
    return (
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
    )
}