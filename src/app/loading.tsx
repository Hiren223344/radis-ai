'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
