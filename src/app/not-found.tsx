import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-muted-foreground mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium">
        Go Home
      </Link>
    </div>
  );
}
