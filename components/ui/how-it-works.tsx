export default function HowItWorks() {
    return(
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
          </div>
        </div>
      </section>
    )
}