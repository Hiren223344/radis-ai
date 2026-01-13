'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-6">
            <h1 className="text-3xl font-bold">A critical error occurred</h1>
            <p className="text-muted-foreground">The application encountered a global error.</p>
            <button
              onClick={() => reset()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
