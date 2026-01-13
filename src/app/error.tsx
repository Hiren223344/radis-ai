'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold">Something went wrong!</h1>
        <p className="text-muted-foreground">An unexpected error occurred.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
