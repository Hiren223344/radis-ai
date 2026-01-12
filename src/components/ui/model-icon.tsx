// Model icon component
import React from 'react';
import { 
  OpenAI, 
  Claude, 
  Google, 
  Meta, 
  Mistral, 
  Perplexity, 
  Gemini, 
  Cohere,
  DeepSeek,
  Grok,
  HuggingFace,
  Minimax,
  Stability,
  Moonshot,
  Qwen,
  Yi,
  Baichuan,
  InternLM,
  Gemma,
  XAI
} from '@lobehub/icons';

interface ModelIconProps {
  modelId: string;
  size?: number;
  className?: string;
}

const ModelIcon = ({ modelId, size = 24, className }: ModelIconProps) => {
  const id = modelId.toLowerCase();

  // Specific model mappings
  if (id.includes('gpt') || id.includes('openai')) return <OpenAI size={size} className={className} />;
  if (id.includes('claude') || id.includes('anthropic')) return <Claude size={size} className={className} />;
  if (id.includes('gemini')) return <Gemini size={size} className={className} />;
  if (id.includes('gemma')) return <Gemma size={size} className={className} />;
  if (id.includes('google') || id.includes('palm')) return <Google size={size} className={className} />;
  if (id.includes('llama') || id.includes('meta')) return <Meta size={size} className={className} />;
  if (id.includes('mistral') || id.includes('mixtral')) return <Mistral size={size} className={className} />;
  if (id.includes('deepseek')) return <DeepSeek size={size} className={className} />;
  if (id.includes('perplexity')) return <Perplexity size={size} className={className} />;
  if (id.includes('cohere')) return <Cohere size={size} className={className} />;
  if (id.includes('grok')) return <Grok size={size} className={className} />;
  if (id.includes('xai')) return <XAI size={size} className={className} />;
  if (id.includes('qwen')) return <Qwen size={size} className={className} />;
  if (id.includes('yi-')) return <Yi size={size} className={className} />;
  if (id.includes('baichuan')) return <Baichuan size={size} className={className} />;
  if (id.includes('internlm')) return <InternLM size={size} className={className} />;
  if (id.includes('moonshot')) return <Moonshot size={size} className={className} />;
  if (id.includes('minimax')) return <Minimax size={size} className={className} />;
  if (id.includes('stability')) return <Stability size={size} className={className} />;
  
  // Default fallback
  return <HuggingFace size={size} className={className} />;
};

export default ModelIcon;
