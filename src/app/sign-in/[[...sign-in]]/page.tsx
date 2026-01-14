'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SignIn 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "rounded-2xl shadow-xl border border-white/60 bg-white/80 backdrop-blur-xl",
            headerTitle: "text-primary font-bold",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton: "rounded-xl border-white/60",
            formButtonPrimary: "rounded-xl bg-primary hover:bg-primary/90",
            formFieldInput: "rounded-xl border-white/60",
            footerActionLink: "text-primary hover:text-primary/80"
          }
        }}
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
      />
    </div>
  );
}
