import { Badge, ArrowRight } from "lucide-react";
import Benefits from "./ui/beneifts-section";
import { Button } from "./ui/button";

export default function Hero() {

    return (
        <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">Stop Drowning in Your Inbox</Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Email always finds a way to{" "}
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
            <Benefits/>

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
    )
}   