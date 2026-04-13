'use client';
import { useEffect, useRef } from 'react';

export default function AdsterraNativeAd() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        
        // Prevent duplicate script injection
        if (containerRef.current.querySelector('script')) return;

        const script = document.createElement('script');
        script.async = true;
        script.dataset.cfasync = 'false';
        script.src = 'https://pl29141639.profitablecpmratenetwork.com/bb32d4f8f9f564d7517b4885f34bf046/invoke.js';
        
        containerRef.current.appendChild(script);
    }, []);

    return (
        <div className="w-full flex justify-center items-center my-8 bg-card/5 rounded-2xl" aria-hidden="true">
            {/* The ID targeted by the script */}
            <div id="container-bb32d4f8f9f564d7517b4885f34bf046" ref={containerRef} className="w-full max-w-full overflow-hidden flex justify-center"></div>
        </div>
    );
}
