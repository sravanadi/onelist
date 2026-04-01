import React from 'react';
import Link from 'next/link';

export default function SafetyNote({ content }: { content?: string }) {
  return (
    <section className="mt-16 mb-8">
      <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <span className="text-8xl font-black italic text-foreground opacity-5">SAFE</span>
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-8 bg-primary rounded-full"></span>
            Streaming Safety & Privacy Advice
          </h2>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground font-medium leading-relaxed">
            {content ? (
              <p>{content}</p>
            ) : (
              <>
                <p className="mb-4">
                  When accessing third-party streaming platforms and link directories worldwide, your digital privacy should always be a top priority. Internet Service Providers (ISPs) in many regions actively monitor streaming activity, often resulting in bandwidth throttling or restricted access to international content libraries. To ensure a seamless and private experience, we strongly recommend two essential tools for users everywhere.
                </p>
                <p>
                  First, a <Link href="/vpn" className="text-primary hover:underline font-bold">Premium VPN</Link> is indispensable for bypassing geo-restrictions and encrypting your connection, making your activity invisible to local surveillance. Second, a robust <Link href="/adblockers" className="text-primary hover:underline font-bold">AdBlocker</Link> protects you from intrusive pop-ups and malicious scripts that are common on free streaming sites. No matter your location, these safeguards allow you to explore the global entertainment landscape with total peace of mind and zero interruptions.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
