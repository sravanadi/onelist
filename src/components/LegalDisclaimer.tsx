import React from 'react';

export default function LegalDisclaimer() {
    return (
        <div className="bg-amber-900/10 border border-amber-900/30 rounded-xl p-6 my-8 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-amber-500 text-xl">⚠️</span>
                <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm">Legal Disclaimer</h3>
            </div>
            <p className="text-amber-200/70 text-sm leading-relaxed">
                <strong>Important:</strong> We do not host, store, or distribute any media content. This website is a curated directory of external links provided for informational purposes only. Use of these websites is at your <strong>own risk</strong>. We are not responsible for the content, security, or privacy practices of any third-party platforms. We strongly recommend using a <a href="/vpn" className="text-amber-400 hover:underline">Secure VPN</a> and <a href="/adblockers" className="text-amber-400 hover:underline">AdBlocker</a> before browsing.
            </p>
        </div>
    );
}
