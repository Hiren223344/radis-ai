'use client';

import React from 'react';
import * as Icons from '@lobehub/icons';

interface ModelIconProps {
  modelId: string;
  size?: number;
  className?: string;
}

const ModelIcon = ({ modelId, size = 24, className }: ModelIconProps) => {
  const id = modelId.toLowerCase();

  const getIcon = () => {
    // Mapping model IDs to LobeHub icon components
    if (id.includes('gpt') || id.includes('openai')) return Icons.OpenAI;
    if (id.includes('claude') || id.includes('anthropic')) return Icons.Claude;
    if (id.includes('gemini')) return Icons.Gemini;
    if (id.includes('gemma')) return Icons.Gemma;
    if (id.includes('google') || id.includes('palm')) return Icons.Google;
    if (id.includes('llama') || id.includes('meta')) return Icons.Meta;
    if (id.includes('mistral') || id.includes('mixtral')) return Icons.Mistral;
    if (id.includes('deepseek')) return Icons.DeepSeek;
    if (id.includes('perplexity')) return Icons.Perplexity;
    if (id.includes('cohere')) return Icons.Cohere;
    if (id.includes('grok')) return Icons.Grok;
    if (id.includes('xai')) return Icons.XAI;
    if (id.includes('qwen')) return Icons.Qwen;
    if (id.includes('yi-')) return Icons.Yi;
    if (id.includes('baichuan')) return Icons.Baichuan;
    if (id.includes('internlm')) return Icons.InternLM;
    if (id.includes('moonshot')) return Icons.Moonshot;
    if (id.includes('minimax')) return Icons.Minimax;
    if (id.includes('stability')) return Icons.Stability;
    
    return Icons.HuggingFace;
  };

  const IconComponent = getIcon() as any;

  // Fallback if component is undefined
  if (!IconComponent) {
    return <Icons.HuggingFace size={size} className={className} />;
  }

  // Use Avatar variant which is usually colored and looks good in these cards
  // If Avatar doesn't exist, fallback to the base component
  if (IconComponent.Avatar) {
    return <IconComponent.Avatar size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default ModelIcon;
