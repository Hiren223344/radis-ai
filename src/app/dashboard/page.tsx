'use client';

import { useUser } from '@clerk/nextjs';
import Footer from '@/components/sections/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Key, CreditCard, Activity } from 'lucide-react';
import TransitionLink from '@/components/TransitionLink';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back, {user?.firstName || 'User'}</h1>
            <p className="text-muted-foreground mt-2">Manage your account and API access</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TransitionLink href="/dashboard/api-keys">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5" />
                    API Keys
                  </CardTitle>
                  <CardDescription>Manage your API key</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create and manage your API key to access our services programmatically.
                  </p>
                </CardContent>
              </Card>
            </TransitionLink>

            <TransitionLink href="/dashboard/billing">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Billing
                  </CardTitle>
                  <CardDescription>Manage your subscription</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View your usage, manage billing information, and upgrade your plan.
                  </p>
                </CardContent>
              </Card>
            </TransitionLink>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Usage
                </CardTitle>
                <CardDescription>Your API usage stats</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Coming soon - Track your API usage and performance metrics.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-sm">{user?.primaryEmailAddress?.emailAddress || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">User ID</p>
                    <p className="text-sm font-mono text-xs">{user?.id || '-'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
