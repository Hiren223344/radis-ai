"use client";
import React, { useEffect, useState } from 'react';
import { Copy, ExternalLink, Search } from 'lucide-react';

interface Model {
  id: string;
  name: string;
  description: string;
  pricing: {
    prompt: string;
    completion: string;
  };
  context_length: number;
}

const ModelList = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_MODELS_URL || "https://openrouter.ai/api/v1/models";
        const res = await fetch(url);
        const data = await res.json();
        setModels(data.data || []);
      } catch (err) {
        console.error("Error fetching models:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, []);

  const filteredModels = models.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.id.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="p-20 text-center text-muted-foreground">Loading models...</div>;

  return (
    <div className="w-full max-w-screen-4xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8 overflow-hidden">
        <div className="flex items-center gap-4">
          <h2 className="text-[24px] font-semibold text-foreground">Models</h2>
          <div className="flex items-center gap-1 rounded-md border border-border p-1">
            <button className="flex items-center gap-2 px-3 py-1 text-[12px] font-medium text-slate-11 hover:bg-slate-50 transition-colors border-r border-border">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M16 3H21V8M8 21H3V16M21 3L14.5 9.5M3 21L9.5 14.5M3 3H8L3 8V3ZM21 21H16L21 16V21Z" /></svg>
              Compare
            </button>
            <div className="flex items-center gap-1 px-1">
               <button className="p-1.5 rounded bg-slate-100 text-foreground">
                 <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M3,11H21V13H3V11M3,18H21V20H3V18M3,4H21V6H3V4Z" /></svg>
               </button>
               <button className="p-1.5 rounded text-slate-11 hover:bg-slate-50">
                 <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M3,5H21V7H3V5M3,11H21V13H3V11M3,17H21V19H3V17Z" /></svg>
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative flex items-center bg-slate-50 border border-border rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-slate-400 focus-within:bg-white transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-[14px] w-full placeholder:text-slate-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-10 text-[13px] text-slate-11 font-medium">
        <div>{filteredModels.length} models</div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-foreground">
          Most Popular
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M7,10L12,15L17,10H7Z" /></svg>
        </div>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {filteredModels.map((model) => (
          <div key={model.id} className="py-8 first:pt-4 group">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[16px] font-semibold text-foreground tracking-tight">
                      {model.name}
                    </h3>
                    <button className="p-1 rounded hover:bg-slate-100 text-slate-11 transition-colors">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="text-[12px] font-medium text-slate-11 tabular-nums pt-1">
                  {model.context_length} context
                </div>
              </div>

              <p className="text-[14px] text-muted-foreground leading-relaxed line-clamp-2 max-w-[850px]">
                {model.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-slate-11">
                <span>by {model.id.split('/')[0]}</span>
                <span className="text-slate-300">•</span>
                <span>${(Number(model.pricing.prompt) * 1000000).toFixed(2)}/M input</span>
                <span className="text-slate-300">•</span>
                <span>${(Number(model.pricing.completion) * 1000000).toFixed(2)}/M output</span>
              </div>
            </div>
          </div>
        ))}
        {filteredModels.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No models found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelList;
