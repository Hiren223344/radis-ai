import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 text-center">
      <div className="size-16 bg-muted rounded-2xl flex items-center justify-center mb-4">
        <svg className="size-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-3xl font-black tracking-tighter mb-2">404 - Not Found</h1>
      <p className="text-muted-foreground font-medium mb-8">The page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
