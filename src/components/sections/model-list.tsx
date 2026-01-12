"use client";

import React, { useEffect, useState } from 'react';
import { Copy, Search } from 'lucide-react';
import puter from '@heyputer/puter.js';
import ModelIcon from '../ui/model-icon';

interface Model {
  id: string;
  name: string;
  description: string;
  provider: string;
  pricing?: {
    prompt: string;
    completion: string;
  };
  context_length?: number;
  type?: string;
}

const getProvider = (id: string, name: string) => {
  const lowerId = id.toLowerCase();
  const lowerName = (name || "").toLowerCase();
  
  if (lowerId.includes('gpt') || lowerId.includes('o1') || lowerId.includes('o3') || lowerId.includes('openai')) return 'OpenAI';
  if (lowerId.includes('claude') || lowerId.includes('anthropic')) return 'Anthropic';
  if (lowerId.includes('gemini') || lowerId.includes('google')) return 'Google';
  if (lowerId.includes('llama') || lowerId.includes('meta')) return 'Meta';
  if (lowerId.includes('mistral')) return 'Mistral';
  if (lowerId.includes('deepseek')) return 'DeepSeek';
  if (lowerId.includes('qwen') || lowerId.includes('alibaba')) return 'Alibaba';
  if (lowerId.includes('phi') || lowerId.includes('microsoft')) return 'Microsoft';
  if (lowerId.includes('grok') || lowerId.includes('xai')) return 'xAI';
  if (lowerId.includes('perplexity')) return 'Perplexity';
  if (lowerId.includes('cohere')) return 'Cohere';
  
  if (lowerName.includes('claude')) return 'Anthropic';
  if (lowerName.includes('gpt')) return 'OpenAI';
  if (lowerName.includes('gemini')) return 'Google';
  
  if (id.includes('/')) return id.split('/')[0];
  return 'Cloud Provider';
};

interface TagProps {
  label: string;
  color?: string;
  variant?: 'default' | 'reasoning' | 'puter';
}

const Tag = ({ label, color = '#64748b', variant = 'default' }: TagProps) => {
  const styles = {
    default: "bg-white text-slate-11 border-border",
    reasoning: "bg-purple-50 text-purple-700 border-purple-200",
    puter: "bg-blue-50 text-blue-700 border-blue-200"
  };
  
  return (
    <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[11px] font-medium ${styles[variant]}`}>
      {!variant || variant === 'default' ? <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} /> : null}
      {label}
    </div>
  );
};

const ModelList = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

    useEffect(() => {
      const fetchModels = async () => {
        try {
          // @ts-ignore
          const response = await puter.ai.listModels();
          console.log("Puter models:", response);
          
            // Map Puter models to our Model interface
            const formattedModels: Model[] = response.map((m: any) => {
              const modelId = typeof m === 'string' ? m : (m.id || m.name || 'unknown-model');
              const modelName = typeof m.name === 'string' ? m.name : modelId;
              
              // Determine if it's a reasoning model
              const isReasoning = modelId.toLowerCase().includes('o1') || 
                                 modelId.toLowerCase().includes('o3') || 
                                 modelId.toLowerCase().includes('r1') || 
                                 modelId.toLowerCase().includes('reasoning') ||
                                 modelName.toLowerCase().includes('reasoning') ||
                                 modelName.toLowerCase().includes('o1');

              const isVision = modelId.toLowerCase().includes('vision') || 
                               modelId.toLowerCase().includes('vl') || 
                               modelName.toLowerCase().includes('vision');

              let type = 'Text Model';
              if (isReasoning) type = 'Reasoning';
              else if (isVision) type = 'Vision Model';

                return {
                  id: modelId,
                  name: modelName,
                  description: m.description || `AI model provided by ${m.provider || getProvider(modelId, modelName)}.`,
                  provider: m.provider || getProvider(modelId, modelName),
                  pricing: m.pricing || { prompt: "0.00", completion: "0.00" },
                  context_length: m.context_window || m.context || 4096,
                  type: type
                };
              });

            
            setModels(formattedModels);
          } catch (err) {
            console.error("Error fetching models from Puter:", err);
            // Fallback static data if API fails
            setModels([
              {
                id: "claude-3-5-sonnet",
                name: "Claude 3.5 Sonnet",
                description: "Anthropic's most intelligent model yet.",
                provider: "Anthropic",
                pricing: { prompt: "0.000003", completion: "0.000015" },
                context_length: 200000
              },
              {
                id: "gpt-4o",
                name: "GPT-4o",
                description: "OpenAI's most advanced multimodal model.",
                provider: "OpenAI",
                pricing: { prompt: "0.000005", completion: "0.000015" },
                context_length: 128000
              }
            ]);
        } finally {
          setLoading(false);
        }
      };
      fetchModels();
    }, []);


  const filteredModels = models.filter(m => 
    m.name?.toLowerCase().includes(search.toLowerCase()) || 
    m.id?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="p-20 text-center text-muted-foreground">Loading models...</div>;

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-[24px] font-semibold text-foreground">Models</h2>
          <div className="flex items-center gap-1 rounded-md border border-border p-1">
            <button className="flex items-center gap-2 px-3 py-1 text-[12px] font-medium text-slate-11 hover:bg-slate-50 transition-colors border-r border-border">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path d="M16 3H21V8M8 21H3V16M21 3L14.5 9.5M3 21L9.5 14.5M3 3H8L3 8V3ZM21 21H16L21 16V21Z" /></svg>
              Compare
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative flex items-center bg-slate-50 border border-border rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-slate-400 focus-within:bg-white transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search models..." 
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
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-8 flex-shrink-0 rounded-lg border border-border bg-white shadow-sm overflow-hidden p-1.5">
                        <ModelIcon modelId={model.id} size={20} />
                      </div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-[16px] font-semibold text-foreground tracking-tight">
                              {model.name || model.id}
                            </h3>
                            <div className="flex items-center gap-2">
                              {model.type === 'Reasoning' ? (
                                <Tag label="Reasoning" variant="reasoning" />
                              ) : model.type === 'Vision Model' ? (
                                <Tag label="Vision Model" variant="default" color="#3b82f6" />
                              ) : (
                                <Tag label="Text Model" variant="default" color="#10b981" />
                              )}
                              <button 
                                className="p-1 rounded hover:bg-slate-100 text-slate-11 transition-colors"
                                onClick={() => navigator.clipboard.writeText(model.id)}
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                    </div>
                  </div>
                  <div className="text-[12px] font-medium text-slate-11 tabular-nums pt-1">
                    {model.context_length ? `${(model.context_length / 1000).toFixed(0)}K context` : 'N/A context'}
                  </div>
                </div>

                <p className="text-[14px] text-muted-foreground leading-relaxed line-clamp-2 max-w-[850px]">
                  {model.description}
                </p>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-slate-11">
                      <span className="flex items-center gap-1">
                        by <span className="underline cursor-pointer hover:text-foreground">{model.id.includes('/') ? model.id.split('/')[0] : 'Cloud Provider'}</span>
                      </span>
                      {model.pricing && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span>${(Number(model.pricing.prompt) * 1000000).toFixed(2)}/M input</span>
                          <span className="text-slate-300">•</span>
                          <span>${(Number(model.pricing.completion) * 1000000).toFixed(2)}/M output</span>
                        </>
                      )}
                    </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelList;
