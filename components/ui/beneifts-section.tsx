import { Card, CardContent } from "./card";
import { Sparkles, BarChart3, Bell, Shield } from "lucide-react";

export default function Benefits() {

    return (
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
                <CardContent className="p-6 text-cente  r">
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

    )
}