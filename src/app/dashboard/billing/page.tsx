'use client';

import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, ArrowLeft, Check } from 'lucide-react';
import TransitionLink from '@/components/TransitionLink';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '1,000 API calls/month',
      '1 API key',
      'Community support',
      'Basic models access',
    ],
    current: true,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For professional developers',
    features: [
      '50,000 API calls/month',
      '1 API key',
      'Priority support',
      'All models access',
      'Advanced analytics',
    ],
    current: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large scale applications',
    features: [
      'Unlimited API calls',
      'Multiple API keys',
      'Dedicated support',
      'All models access',
      'Custom integrations',
      'SLA guarantee',
    ],
    current: false,
  },
];

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <TransitionLink href="/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </TransitionLink>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <CreditCard className="h-8 w-8" />
              Billing
            </h1>
            <p className="text-muted-foreground mt-2">Manage your subscription and billing information</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>You are currently on the Free plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">Free</p>
                  <p className="text-muted-foreground">1,000 API calls remaining this month</p>
                </div>
                <Button variant="outline">Manage Subscription</Button>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6">Available Plans</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={plan.current ? 'border-primary' : ''}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {plan.name}
                    {plan.current && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.current ? 'outline' : 'default'}
                    disabled={plan.current}
                  >
                    {plan.current ? 'Current Plan' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Upgrade'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Add a payment method to upgrade your plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                  <span className="text-muted-foreground">No payment method added</span>
                </div>
                <Button variant="outline">Add Payment Method</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
