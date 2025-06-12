import { Card, CardContent } from "./card";
import { CheckCircle, Zap, Shield } from "lucide-react";

export default function DesiresSection() {
    return (
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
    )
}