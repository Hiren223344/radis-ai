'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Key, Copy, Eye, EyeOff, Trash2, Plus, ArrowLeft } from 'lucide-react';
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

  const maskApiKey = (key: string) => {
    return key.substring(0, 8) + '•'.repeat(40) + key.substring(key.length - 4);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
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
              <CardTitle>Usage Example</CardTitle>
              <CardDescription>
                Use your API key to authenticate requests to the Radison API
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground mb-2">cURL</p>
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                  <code>{`curl https://api.radison.com/v1/chat/completions \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -H "Content-Type: application/json" \\
    -d '{
      "model": "gpt-4",
      "messages": [{"role": "user", "content": "Hello!"}]
    }'`}</code>
                </pre>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground mb-2">Python (requests)</p>
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                  <code>{`import requests

url = "https://api.radison.com/v1/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "model": "gpt-4",
    "messages": [{"role": "user", "content": "Hello!"}]
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}</code>
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
