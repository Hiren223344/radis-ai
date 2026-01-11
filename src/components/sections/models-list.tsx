"use client";
import React, { useEffect, useState } from 'react';
import { Search, ChevronDown, Copy, PlusCircle } from 'lucide-react';

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

const ModelsList = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="p-20 text-center text-muted-foreground">Loading models...</div>;

  return (
    <div className="w-full flex-1 tabular-nums">
      <div className="mx-auto max-w-full">
        {models.map((model) => (
          <div 
            key={model.id} 
            className="model-list-item border-b border-border py-8 first:pt-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="model-title text-[16px] font-semibold text-foreground leading-[1.4]">
                  {model.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  <button className="text-muted-foreground hover:text-foreground transition-colors p-0.5">
                    <PlusCircle className="size-3.5" strokeWidth={2.5} />
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors p-0.5">
                    <Copy className="size-3.5" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              <div className="price-stat font-mono text-[14px] text-muted-foreground whitespace-nowrap">
                {model.context_length} context
              </div>
            </div>

            <p className="description-text mb-2 line-clamp-2 max-w-[95%] text-[14px] leading-[1.6] text-muted-foreground">
              {model.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground font-medium">
              <span>by {model.id.split('/')[0]}</span>
              <span>•</span>
              <span>${(Number(model.pricing.prompt) * 1000000).toFixed(2)}/M input</span>
              <span>•</span>
              <span>${(Number(model.pricing.completion) * 1000000).toFixed(2)}/M output</span>
            </div>
          </div>
        ))}
        
        {models.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No models found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelsList;
