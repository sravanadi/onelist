export const metadata = {
    title: "Contact Us - StreamHub",
    description: "Get in touch with the StreamHub team."
};

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-muted-foreground mb-12">
                Have a question, feedback, or a site suggestion? Fill out the form below and our team will get back to you.
            </p>

            <form className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Your name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input type="email" id="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="you@example.com" />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <select id="subject" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                        <option>General Inquiry</option>
                        <option>Site Suggestion</option>
                        <option>Report a Broken Link</option>
                        <option>Advertising & Partnerships</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea id="message" rows={5} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full bg-primary hover:bg-[#b0060e] text-white font-bold py-3 px-4 rounded-lg transition-colors">
                    Send Message
                </button>
            </form>
        </div>
    );
}
