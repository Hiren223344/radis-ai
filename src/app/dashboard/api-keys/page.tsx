'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser } from '@clerk/nextjs';
import Footer from '@/components/sections/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Key, Copy, Eye, EyeOff, Trash2, Plus, ArrowLeft, Check, Info } from 'lucide-react';
import TransitionLink from '@/components/TransitionLink';
import { toast } from 'sonner';

interface ApiKeyData {
  id: string;
  user_id: string;
  api_key: string;
  name: string;
  created_at: string;
  last_used_at: string | null;
}



export default function ApiKeysPage() {
  const { user } = useUser();
  const [apiKey, setApiKey] = useState<ApiKeyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);
  const [copied, setCopied] = useState(false);
  const [baseUrl, setBaseUrl] = useState(process.env.NEXT_PUBLIC_APP_URL || 'https://api.radison.com');

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_APP_URL && typeof window !== 'undefined') {
      setBaseUrl(window.location.origin);
    }
  }, []);

  const displayKey = apiKey?.api_key || 'YOUR_API_KEY';

  const codeExamples = useMemo(() => [
    {
      lang: 'cURL',
      code: `curl ${baseUrl}/api/v1/chat/completions \\
  -H "Authorization: Bearer ${displayKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`
    },
    {
      lang: 'Python',
      code: `import requests

res = requests.post("${baseUrl}/api/v1/chat/completions",
    headers={"Authorization": "Bearer ${displayKey}"},
    json={"model": "gpt-4o", "messages": [{"role": "user", "content": "Hello!"}]}
)
print(res.json())`
    },
    {
      lang: 'JavaScript',
      code: `const response = await fetch(
  "${baseUrl}/api/v1/chat/completions",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer ${displayKey}",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: "Hello!" }]
    })
  }
);

const data = await response.json();
console.log(data);`
    },
    {
      lang: 'TypeScript',
      code: `import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "${baseUrl}/api/v1",
  apiKey: "${displayKey}",
});

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(completion.choices[0].message);`
    },
    {
      lang: 'Go',
      code: `package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func main() {
    url := "${baseUrl}/api/v1/chat/completions"
    
    payload := map[string]interface{}{
        "model": "gpt-4o",
        "messages": []map[string]string{
            {"role": "user", "content": "Hello!"},
        },
    }
    
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer ${displayKey}")
    req.Header.Set("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()
}`
    },
    {
      lang: 'Ruby',
      code: `require 'net/http'
require 'json'
require 'uri'

uri = URI('${baseUrl}/api/v1/chat/completions')
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = uri.scheme == 'https'

request = Net::HTTP::Post.new(uri)
request['Authorization'] = 'Bearer ${displayKey}'
request['Content-Type'] = 'application/json'
request.body = {
  model: 'gpt-4o',
  messages: [{ role: 'user', content: 'Hello!' }]
}.to_json

response = http.request(request)
puts JSON.parse(response.body)`
    }
  ], [displayKey, baseUrl]);

  const fetchApiKey = async () => {
    try {
      const res = await fetch('/api/api-keys');
      const data = await res.json();
      setApiKey(data.apiKey);
    } catch {
      toast.error('Failed to fetch API key');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiKey();
  }, []);

  const createApiKey = async () => {
    setCreating(true);
    try {
      const res = await fetch('/api/api-keys', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        setApiKey(data.apiKey);
        setShowKey(true);
        toast.success('API key created successfully');
      } else {
        toast.error(data.error);
      }
    } catch {
      toast.error('Failed to create API key');
    } finally {
      setCreating(false);
    }
  };

  const deleteApiKey = async () => {
    if (!confirm('Are you sure you want to delete your API key? This action cannot be undone.')) {
      return;
    }
    setDeleting(true);
    try {
      const res = await fetch('/api/api-keys', { method: 'DELETE' });
      if (res.ok) {
        setApiKey(null);
        setShowKey(false);
        toast.success('API key deleted successfully');
      } else {
        const data = await res.json();
        toast.error(data.error);
      }
    } catch {
      toast.error('Failed to delete API key');
    } finally {
      setDeleting(false);
    }
  };

  const copyToClipboard = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey.api_key);
      toast.success('API key copied to clipboard');
    }
  };

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[selectedLang].code);
    setCopied(true);
    toast.success('Code copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const maskApiKey = (key: string) => {
    return key.substring(0, 8) + '•'.repeat(40) + key.substring(key.length - 4);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <TransitionLink href="/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </TransitionLink>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Key className="h-8 w-8" />
              API Keys
            </h1>
            <p className="text-muted-foreground mt-2">Manage your API key for accessing Radison services</p>
          </div>

          <Alert className="mb-6 border-blue-500/50 bg-blue-500/10 text-blue-500">
            <Info className="h-4 w-4" />
            <AlertTitle>Model Compatibility Notice</AlertTitle>
            <AlertDescription>
              Currently, only <strong>chat and text completion models</strong> are supported via the API. Image generation and other modalities are not yet available.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Your API Key</CardTitle>
              <CardDescription>
                You can only have one API key at a time. Keep it secure and never share it publicly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : apiKey ? (
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium mb-1">{apiKey.name}</p>
                        <code className="text-xs font-mono break-all">
                          {showKey ? apiKey.api_key : maskApiKey(apiKey.api_key)}
                        </code>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowKey(!showKey)}
                          title={showKey ? 'Hide key' : 'Show key'}
                        >
                          {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={copyToClipboard}
                          title="Copy key"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={deleteApiKey}
                          disabled={deleting}
                          className="text-destructive hover:text-destructive"
                          title="Delete key"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Created: {new Date(apiKey.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <p className="text-sm font-medium mb-1">User ID</p>
                    <code className="text-xs font-mono text-muted-foreground">{user?.id}</code>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Key className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">You don&apos;t have an API key yet</p>
                  <Button onClick={createApiKey} disabled={creating}>
                    <Plus className="h-4 w-4 mr-2" />
                    {creating ? 'Creating...' : 'Create API Key'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Usage Examples</CardTitle>
              <CardDescription className="flex flex-col gap-2">
                <span>Use your API key to authenticate requests to the Radison API</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                    API Base URL: {baseUrl}/api/v1
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {codeExamples.map((example, index) => (
                  <button
                    key={example.lang}
                    onClick={() => setSelectedLang(index)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${index === selectedLang
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                      }`}
                  >
                    {example.lang}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyCodeToClipboard}
                  className="absolute top-3 right-3 z-10"
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                  <code>{codeExamples[selectedLang].code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
