"use client";
import React, { useEffect, useState } from 'react';

const ModelList = () => {
  const [models, setModels] = useState([]);
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

  if (loading) return <div className="p-8 text-center">Loading models...</div>;

  return (
    <div className="w-full max-w-screen-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Available Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <div key={model.id} className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
            <h3 className="font-bold text-lg mb-2">{model.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{model.description}</p>
            <div className="text-xs font-mono text-slate-500">
              Context: {model.context_length}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ModelList;
