export const metadata = {
    title: "DMCA Policy - OneList"
};

export default function DmcaPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-8">DMCA & Legal Notice</h1>

            <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8 text-white">
                    <p className="font-bold mb-2">Important Notice:</p>
                    <p>OneList is an informational directory and search engine. <strong>We do not host, upload, or manage any video files, media, or copyrighted content on our servers.</strong> We simply provide links to third-party websites that are publicly available on the internet.</p>
                </div>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Digital Millennium Copyright Act</h2>
                <p>
                    We take copyright infringement seriously and will vigorously protect the rights of legal copyright owners. If you are the copyright owner of content which appears on a website linked from our directory and you did not authorize the use of the content you must notify us in writing in order for us to identify the allegedly infringing content and take action to remove the link from our directory.
                </p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Filing a DMCA Request</h2>
                <p>Your written notice must include the following:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed.</li>
                    <li>Identification of the material that is claimed to be infringing (the specific URL on our site that links to the infringing content).</li>
                    <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and email address.</li>
                    <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                </ul>

                <p className="mt-8">
                    Please send DMCA notices via our <a href="/contact" className="text-primary hover:underline">Contact form</a> with the subject "DMCA Takedown Request". We aim to remove infringing links within 48 hours of receiving a valid request.
                </p>
            </div>
        </div>
    );
}
