'use client';
import { useEffect, useState } from 'react';

interface AdsterraAdProps {
    width: number;
    height: number;
    adKey: string;
}

export default function AdsterraAd({ width, height, adKey }: AdsterraAdProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div style={{ width, height }} className="bg-transparent" />;

    const iframeContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
            </style>
        </head>
        <body>
            <script>
                atOptions = {
                    'key' : '${adKey}',
                    'format' : 'iframe',
                    'height' : ${height},
                    'width' : ${width},
                    'params' : {}
                };
            </script>
            <script src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
        </body>
        </html>
    `;

    return (
        <div className="flex justify-center items-center overflow-hidden my-4 bg-card/5 rounded-xl transition-all" aria-hidden="true">
            <iframe
                title="Advertisement Container"
                srcDoc={iframeContent}
                width={width}
                height={height}
                frameBorder="0"
                scrolling="no"
                sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin"
                style={{ border: 'none', background: 'transparent', maxWidth: '100%' }}
            />
        </div>
    );
}
