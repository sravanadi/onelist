'use client';

import { useState } from 'react';
import JsonLd from './JsonLd';

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    items: FaqItem[];
    title?: string;
}

export default function FaqSection({ items, title = "Frequently Asked Questions" }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="mt-16 pt-16 border-t border-border">
            <JsonLd data={faqSchema} />
            <h2 className="text-3xl font-black text-foreground mb-8">{title}</h2>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div 
                        key={index}
                        className="bg-card/50 border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                        >
                            <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                {item.question}
                            </span>
                            <span className={`text-xl text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                ↓
                            </span>
                        </button>
                        <div 
                            className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 p-6 pt-0 border-t border-border/50' : 'max-h-0 opacity-0 px-6 overflow-hidden'}`}
                        >
                            <p 
                                className="text-muted-foreground leading-relaxed font-medium"
                                dangerouslySetInnerHTML={{ __html: item.answer }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
