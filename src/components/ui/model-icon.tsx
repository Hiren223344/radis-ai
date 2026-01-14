// Model icon component with colored variants
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

  // Specific model mappings with colored variants if available
  // Most lobe-icons components have a .Color subcomponent
  if (id.includes('gpt') || id.includes('openai')) return <OpenAI.Color size={size} className={className} />;
  if (id.includes('claude') || id.includes('anthropic')) return <Claude.Color size={size} className={className} />;
  if (id.includes('gemini')) return <Gemini.Color size={size} className={className} />;
  if (id.includes('gemma')) return <Gemma.Color size={size} className={className} />;
  if (id.includes('google') || id.includes('palm')) return <Google.Color size={size} className={className} />;
  if (id.includes('llama') || id.includes('meta')) return <Meta.Color size={size} className={className} />;
  if (id.includes('mistral') || id.includes('mixtral')) return <Mistral.Color size={size} className={className} />;
  if (id.includes('deepseek')) return <DeepSeek.Color size={size} className={className} />;
  if (id.includes('perplexity')) return <Perplexity.Color size={size} className={className} />;
  if (id.includes('cohere')) return <Cohere.Color size={size} className={className} />;
  if (id.includes('grok')) return <Grok.Color size={size} className={className} />;
  if (id.includes('xai')) return <XAI.Color size={size} className={className} />;
  if (id.includes('qwen')) return <Qwen.Color size={size} className={className} />;
  if (id.includes('yi-')) return <Yi.Color size={size} className={className} />;
  if (id.includes('baichuan')) return <Baichuan.Color size={size} className={className} />;
  if (id.includes('internlm')) return <InternLM.Color size={size} className={className} />;
  if (id.includes('moonshot')) return <Moonshot.Color size={size} className={className} />;
  if (id.includes('minimax')) return <Minimax.Color size={size} className={className} />;
  if (id.includes('stability')) return <Stability.Color size={size} className={className} />;
  
  // Default fallback
  return <HuggingFace.Color size={size} className={className} />;
};

export default ModelIcon;
