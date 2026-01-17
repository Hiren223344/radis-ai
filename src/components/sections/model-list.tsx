"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { Copy } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
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
  category?: string;
}

const ADDITIONAL_MODELS: Model[] = [
  // Image Models
  { id: "openrouter:google/gemini-2.5-flash-image", name: "Gemini 2.5 Flash Image", provider: "Google", description: "Google's high-speed image generation model.", category: "Image" },
  { id: "openrouter:google/gemini-2.5-flash-image-preview", name: "Gemini 2.5 Flash Image Preview", provider: "Google", description: "Preview version of Google's high-speed image generation model.", category: "Image" },
  { id: "openrouter:google/gemini-flash-1.5", name: "Gemini Flash 1.5", provider: "Google", description: "Google's fast multimodal model.", category: "Image" },
  { id: "openrouter:google/gemini-flash-1.5-8b", name: "Gemini Flash 1.5 8B", provider: "Google", description: "Google's ultra-lightweight fast model.", category: "Image" },
  { id: "stable-diffusion-1.5", name: "Stable Diffusion 1.5", provider: "Stability AI", description: "Classic latent text-to-image diffusion model.", category: "Image" },
  { id: "stable-diffusion-2.1", name: "Stable Diffusion 2.1", provider: "Stability AI", description: "Improved Stable Diffusion model for high-resolution generation.", category: "Image" },
  { id: "stable-diffusion-xl", name: "Stable Diffusion XL", provider: "Stability AI", description: "Next-generation high-resolution image generation model.", category: "Image" },
  { id: "sdxl-turbo", name: "SDXL Turbo", provider: "Stability AI", description: "Real-time text-to-image generation.", category: "Image" },
  { id: "flux-1-dev", name: "Flux 1 Dev", provider: "Black Forest Labs", description: "Advanced image generation model for developers.", category: "Image" },
  { id: "flux-1-schnell", name: "Flux 1 Schnell", provider: "Black Forest Labs", description: "Fastest Flux model for quick iterations.", category: "Image" },
  { id: "flux-1-pro", name: "Flux 1 Pro", provider: "Black Forest Labs", description: "Professional grade high-fidelity image generation.", category: "Image" },
  { id: "gpt-image-1", name: "GPT Image 1", provider: "OpenAI", description: "OpenAI's legacy image generation model.", category: "Image" },
  { id: "dall-e-3", name: "DALL-E 3", provider: "OpenAI", description: "OpenAI's latest and most capable image model.", category: "Image" },

  // Video Models
  { id: "openrouter:sora-2", name: "Sora 2", provider: "OpenAI", description: "OpenAI's advanced text-to-video generation model.", category: "Video" },
  { id: "openrouter:sora-2-pro", name: "Sora 2 Pro", provider: "OpenAI", description: "Professional version of OpenAI's Sora 2.", category: "Video" },
  { id: "sora-2", name: "Sora 2", provider: "OpenAI", description: "Next-generation video generation.", category: "Video" },
  { id: "sora-2-pro", name: "Sora 2 Pro", provider: "OpenAI", description: "High-end video generation.", category: "Video" },

  // TTS Models
  { id: "openrouter:openai/gpt-4o-audio-preview", name: "GPT-4o Audio Preview", provider: "OpenAI", description: "Multimodal audio capabilities from OpenAI.", category: "TTS" },
  { id: "openrouter:openai/gpt-4o-realtime-preview-tts", name: "GPT-4o Realtime TTS", provider: "OpenAI", description: "Low-latency text-to-speech for real-time applications.", category: "TTS" },
  { id: "gpt-4o-mini-tts", name: "GPT-4o Mini TTS", provider: "OpenAI", description: "Efficient and fast text-to-speech.", category: "TTS" },
  { id: "gpt-4o-realtime-preview-tts", name: "GPT-4o Realtime Preview TTS", provider: "OpenAI", description: "Experimental real-time speech synthesis.", category: "TTS" },
  { id: "tts-1", name: "TTS 1", provider: "OpenAI", description: "OpenAI's high-performance text-to-speech model.", category: "TTS" },
  { id: "tts-1-hd", name: "TTS 1 HD", provider: "OpenAI", description: "High-definition text-to-speech synthesis.", category: "TTS" },
  { id: "eleven_multilingual_v2", name: "Eleven Multilingual v2", provider: "ElevenLabs", description: "State-of-the-art multilingual speech synthesis.", category: "TTS" },
  { id: "eleven_flash_v2_5", name: "Eleven Flash v2.5", provider: "ElevenLabs", description: "Ultra-fast speech generation.", category: "TTS" },
  { id: "eleven_turbo_v2_5", name: "Eleven Turbo v2.5", provider: "ElevenLabs", description: "Optimized turbo speech model.", category: "TTS" },
  { id: "eleven_v3", name: "Eleven v3", provider: "ElevenLabs", description: "Next-gen ElevenLabs speech model.", category: "TTS" },
  { id: "google-tts-standard", name: "Google TTS Standard", provider: "Google", description: "Standard Google text-to-speech.", category: "TTS" },
  { id: "google-tts-neural", name: "Google TTS Neural", provider: "Google", description: "Neural Google text-to-speech for better naturalness.", category: "TTS" },
  { id: "google-tts-wavenet", name: "Google TTS WaveNet", provider: "Google", description: "Premium WaveNet-based speech synthesis.", category: "TTS" },
  { id: "polly-standard", name: "Polly Standard", provider: "Amazon", description: "Amazon Polly standard voices.", category: "TTS" },
  { id: "polly-neural", name: "Polly Neural", provider: "Amazon", description: "Amazon Polly neural voices.", category: "TTS" },
  { id: "azure-tts-neural", name: "Azure TTS Neural", provider: "Microsoft", description: "Microsoft Azure neural speech.", category: "TTS" },
  { id: "azure-tts-custom-neural", name: "Azure TTS Custom Neural", provider: "Microsoft", description: "Customizable neural speech from Azure.", category: "TTS" },
  { id: "seamless-tts", name: "Seamless TTS", provider: "Meta", description: "Meta's seamless translation and speech model.", category: "TTS" },
  { id: "seamless-m4t", name: "Seamless M4T", provider: "Meta", description: "Massively Multilingual & Multimodal Machine Translation.", category: "TTS" },
  { id: "bark", name: "Bark", provider: "Suno", description: "Transformer-based text-to-audio model.", category: "TTS" },
  { id: "coqui-xtts-v2", name: "Coqui XTTS v2", provider: "Coqui", description: "Advanced voice cloning and speech synthesis.", category: "TTS" },
  { id: "tortoise-tts", name: "Tortoise TTS", provider: "Open Source", description: "High-quality multi-voice speech synthesis.", category: "TTS" },

  // STT Models
  { id: "openrouter:openai/gpt-4o-realtime-preview-transcribe", name: "GPT-4o Realtime Transcribe", provider: "OpenAI", description: "Real-time speech-to-text transcription.", category: "STT" },
  { id: "whisper-1", name: "Whisper 1", provider: "OpenAI", description: "OpenAI's state-of-the-art speech recognition model.", category: "STT" },
  { id: "gpt-4o-mini-transcribe", name: "GPT-4o Mini Transcribe", provider: "OpenAI", description: "Fast and efficient transcription.", category: "STT" },
  { id: "gpt-4o-transcribe", name: "GPT-4o Transcribe", provider: "OpenAI", description: "High-fidelity transcription model.", category: "STT" },
  { id: "gpt-4o-transcribe-diarize", name: "GPT-4o Transcribe Diarize", provider: "OpenAI", description: "Transcription with speaker identification.", category: "STT" },
  { id: "google-stt-standard", name: "Google STT Standard", provider: "Google", description: "Google's standard speech-to-text.", category: "STT" },
  { id: "google-stt-enhanced", name: "Google STT Enhanced", provider: "Google", description: "Enhanced accuracy for speech recognition.", category: "STT" },
  { id: "transcribe-standard", name: "Transcribe Standard", provider: "Amazon", description: "AWS Transcribe standard service.", category: "STT" },
  { id: "transcribe-streaming", name: "Transcribe Streaming", provider: "Amazon", description: "Real-time streaming transcription.", category: "STT" },
  { id: "azure-stt-standard", name: "Azure STT Standard", provider: "Microsoft", description: "Microsoft Azure standard speech recognition.", category: "STT" },
  { id: "azure-stt-custom", name: "Azure STT Custom", provider: "Microsoft", description: "Custom speech-to-text from Azure.", category: "STT" },
  { id: "deepgram-nova-2", name: "Deepgram Nova 2", provider: "Deepgram", description: "Ultra-fast and accurate speech transcription.", category: "STT" },
  { id: "deepgram-realtime", name: "Deepgram Realtime", provider: "Deepgram", description: "Low-latency real-time transcription.", category: "STT" },
  { id: "assemblyai-universal", name: "AssemblyAI Universal", provider: "AssemblyAI", description: "Highly accurate universal speech model.", category: "STT" },
  { id: "assemblyai-realtime", name: "AssemblyAI Realtime", provider: "AssemblyAI", description: "Real-time transcription services.", category: "STT" },
  { id: "wav2vec-2.0", name: "Wav2Vec 2.0", provider: "Meta", description: "Self-supervised learning for speech recognition.", category: "STT" },
  { id: "seamless-stt", name: "Seamless STT", provider: "Meta", description: "Multilingual speech-to-text transcription.", category: "STT" },

  // Realtime Models
  { id: "openrouter:openai/gpt-4o-realtime-preview-tts", name: "GPT-4o Realtime TTS (Realtime)", provider: "OpenAI", description: "Real-time interactive speech capabilities.", category: "Realtime" },
  { id: "openrouter:openai/gpt-4o-realtime-preview-transcribe", name: "GPT-4o Realtime Transcribe (Realtime)", provider: "OpenAI", description: "Low-latency interactive transcription.", category: "Realtime" },
  { id: "deepgram-realtime", name: "Deepgram Realtime (Realtime)", provider: "Deepgram", description: "Interactive real-time speech processing.", category: "Realtime" },
  { id: "elevenlabs-realtime-tts", name: "ElevenLabs Realtime TTS", provider: "ElevenLabs", description: "Ultra-low latency speech synthesis.", category: "Realtime" },
  { id: "seamless-realtime", name: "Seamless Realtime", provider: "Meta", description: "Real-time translation and speech processing.", category: "Realtime" },
  { id: "seamless-m4t-realtime", name: "Seamless M4T Realtime", provider: "Meta", description: "Massively Multilingual Realtime Translation.", category: "Realtime" },
];

const getProvider = (id: string, name: string) => {
  const lowerId = id.toLowerCase();
  const lowerName = (name || "").toLowerCase();

  if (lowerId.includes('llama') || lowerId.includes('meta')) return 'Meta';
  if (lowerId.includes('gpt') || lowerId.includes('o1') || lowerId.includes('o3') || lowerId.includes('openai')) return 'OpenAI';
  if (lowerId.includes('claude') || lowerId.includes('anthropic')) return 'Anthropic';
  if (lowerId.includes('mistral') || lowerId.includes('mixtral')) return 'Mistral';
  if (lowerId.includes('deepseek')) return 'DeepSeek';
  if (lowerId.includes('qwen') || lowerId.includes('alibaba')) return 'Alibaba';
  if (lowerId.includes('phi') || lowerId.includes('microsoft')) return 'Microsoft';
  if (lowerId.includes('grok') || lowerId.includes('xai')) return 'xAI';
  if (lowerId.includes('perplexity')) return 'Perplexity';
  if (lowerId.includes('cohere')) return 'Cohere';

  if (lowerName.includes('claude')) return 'Anthropic';
  if (lowerName.includes('gpt')) return 'OpenAI';
  if (lowerName.includes('gemini') || lowerName.includes('google') || lowerName.includes('gemma')) return 'Google';

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

interface ModelListProps {
  search: string;
  onModelCountChange: (count: number) => void;
}

const ModelList: React.FC<ModelListProps> = ({ search, onModelCountChange }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        // @ts-ignore
        const response = await puter.ai.listModels();

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

          let type = 'Text';
          if (isReasoning) type = 'Reasoning';
          else if (isVision) type = 'Vision';

          const rawProvider = m.provider || getProvider(modelId, modelName);
          // Normalize provider name
          const provider = getProvider(modelId, modelName) !== 'Cloud Provider' ? getProvider(modelId, modelName) : rawProvider;

          return {
            id: modelId,
            name: modelName,
            description: m.description || `AI model provided by ${provider}.`,
            provider: provider,
            pricing: m.pricing || { prompt: "0.00", completion: "0.00" },
            context_length: m.context_window || m.context || 4096,
            type: type
          };
        });

        const combinedModels = [...formattedModels, ...ADDITIONAL_MODELS];

        // Deduplicate by ID
        const uniqueModels = Array.from(new Map(combinedModels.map(item => [item.id, item])).values());

        setModels(uniqueModels);
      } catch (err) {
        console.error("Error fetching models from Puter:", err);
        setModels(ADDITIONAL_MODELS);
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, []);

  const searchParams = useSearchParams();
  const inputModality = searchParams.get('input_modalities');
  const outputModality = searchParams.get('output_modalities');
  const providerFilter = searchParams.get('provider');

  const filteredModels = useMemo(() => {
    const filtered = models.filter(m => {
      const lowerId = m.id.toLowerCase();
      const lowerName = (m.name || "").toLowerCase();
      const category = m.category?.toLowerCase() || "";
      const type = m.type?.toLowerCase() || "";

      // Search filter
      const matchesSearch = !search ||
        lowerName.includes(search.toLowerCase()) ||
        lowerId.includes(search.toLowerCase());

      if (!matchesSearch) return false;

      // Provider filter
      if (providerFilter && m.provider.toLowerCase() !== providerFilter.toLowerCase()) {
        return false;
      }

      // Input Modality filter
      if (inputModality) {
        if (inputModality === 'image' && !lowerId.includes('vision') && !lowerId.includes('vl') && !lowerName.includes('vision') && category !== 'image') return false;
        if (inputModality === 'video' && !lowerId.includes('video') && category !== 'video') return false;
        if (inputModality === 'audio' && !lowerId.includes('audio') && category !== 'tts' && category !== 'stt') return false;
        if (inputModality === 'realtime' && category !== 'realtime') return false;
      }

      // Output Modality filter
      if (outputModality) {
        if (outputModality === 'audio' && category !== 'tts' && category !== 'realtime') return false;
        if (outputModality === 'text' && category === 'image') return false;
      }

      // Global filter: no img, vid, tts, stt, realtime models
      if (category === 'image' || category === 'video' || category === 'tts' || category === 'stt' || category === 'realtime') return false;
      if (type === 'image' || type === 'video') return false;
      if (lowerId.includes('dall-e') || lowerId.includes('stable-diffusion') || lowerId.includes('flux')) return false;
      if (lowerName.includes('sora') || lowerName.includes('whisper') || lowerName.includes('tts')) return false;

      return true;
    });
    return filtered;
  }, [models, search, providerFilter, inputModality, outputModality]);

  useEffect(() => {
    onModelCountChange(filteredModels.length);
  }, [filteredModels.length, onModelCountChange]);

  if (loading) return <div className="p-20 text-center text-muted-foreground">Loading models...</div>;

  return (
    <div className="w-full max-w-screen-xl mx-auto py-8">
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
                        ) : model.type === 'Vision' ? (
                          <Tag label="Vision" variant="default" color="#3b82f6" />
                        ) : (
                          <Tag label="Text" variant="default" color="#10b981" />
                        )}
                        <button
                          className="p-1 rounded hover:bg-slate-100 text-slate-11 transition-colors"
                          onClick={async () => {
                            try {
                              if (typeof window !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
                                await navigator.clipboard.writeText(model.id);
                              } else {
                                throw new Error('Clipboard API not available');
                              }
                            } catch (err) {
                              // Silently handle clipboard errors in restricted environments (iframes)
                              console.warn('Clipboard copy restricted:', err);
                            }
                          }}
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
                  by <span className="underline cursor-pointer hover:text-foreground">{model.provider}</span>
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
