import React from 'react';

interface CategoryIntroProps {
  title: string;
  paragraphs: string[];
  bullets: string[];
}

export default function CategoryIntro({ title, paragraphs, bullets }: CategoryIntroProps) {
  return (
    <section className="mb-12">
      <div className="bg-card/30 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight uppercase italic decoration-primary underline-offset-8">
          {title}
        </h2>
        
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-gray-400 leading-relaxed font-medium">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-white/5">
          <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">
            What you&apos;ll find here
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 font-bold bg-white/5 py-3 px-6 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all text-sm md:text-base">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
