"use client";

import { useEffect, useRef } from "react";

type ReporterProps = {
  /*  ⎯⎯ props are only provided on the global-error page ⎯⎯ */
  error?: Error & { digest?: string };
  reset?: () => void;
  isGlobal?: boolean;
};

export default function ErrorReporter({ error, reset, isGlobal = false }: ReporterProps) {
  /* ─ instrumentation shared by every route ─ */
  const lastOverlayMsg = useRef("");
  const pollRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const inIframe = window.parent !== window;
    if (!inIframe) return;

    const send = (payload: unknown) => window.parent.postMessage(payload, "*");

    const onError = (e: ErrorEvent) =>
      send({
        type: "ERROR_CAPTURED",
        error: {
          message: e.message,
          stack: e.error?.stack,
          filename: e.filename,
          lineno: e.lineno,
          colno: e.colno,
          source: "window.onerror",
        },
        timestamp: Date.now(),
      });

    const onReject = (e: PromiseRejectionEvent) =>
      send({
        type: "ERROR_CAPTURED",
        error: {
          message: e.reason?.message ?? String(e.reason),
          stack: e.reason?.stack,
          source: "unhandledrejection",
        },
        timestamp: Date.now(),
      });

    const pollOverlay = () => {
      const overlay = document.querySelector("[data-nextjs-dialog-overlay]");
      const node =
        overlay?.querySelector(
          "h1, h2, .error-message, [data-nextjs-dialog-body]"
        ) ?? null;
      const txt = node?.textContent ?? node?.innerHTML ?? "";
      if (txt && txt !== lastOverlayMsg.current) {
        lastOverlayMsg.current = txt;
        send({
          type: "ERROR_CAPTURED",
          error: { message: txt, source: "nextjs-dev-overlay" },
          timestamp: Date.now(),
        });
      }
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onReject);
    pollRef.current = setInterval(pollOverlay, 1000);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onReject);
      pollRef.current && clearInterval(pollRef.current);
    };
  }, []);

  /* ─ extra postMessage when on the global-error route ─ */
  useEffect(() => {
    if (!error) return;
    window.parent.postMessage(
      {
        type: isGlobal ? "global-error-reset" : "error-reset",
        error: {
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          name: error.name,
        },
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      },
      "*"
    );
  }, [error, isGlobal]);

  /* ─ ordinary pages render nothing ─ */
  if (!error) return null;

  const content = (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 selection:bg-primary/10 selection:text-primary">
      <div className="bg-mesh opacity-50" aria-hidden="true" />
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="space-y-2">
          <div className="size-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-destructive/20">
            <svg className="size-8 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-3xl font-black tracking-tighter">
            Something went wrong!
          </h1>
          <p className="text-muted-foreground font-medium">
            An unexpected error occurred. Please try again or fix with Orchids.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {reset && (
            <button
              onClick={() => reset()}
              className="h-11 px-6 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Try Again
            </button>
          )}
          <button
            onClick={() => window.location.reload()}
            className="h-11 px-6 rounded-xl bg-secondary text-secondary-foreground font-bold hover:scale-[1.02] active:scale-[0.98] transition-all border border-border"
          >
            Reload Page
          </button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="text-left bg-muted/50 rounded-xl border border-border overflow-hidden">
            <summary className="cursor-pointer text-sm font-semibold p-4 hover:bg-muted transition-colors flex items-center justify-between">
              Error Details
              <span className="text-xs font-mono text-muted-foreground">{error.digest || 'no-digest'}</span>
            </summary>
            <div className="p-4 pt-0 border-t border-border">
              <pre className="mt-2 text-[10px] font-mono leading-relaxed overflow-auto max-h-[200px] text-muted-foreground custom-scrollbar">
                {error.stack || error.message}
              </pre>
            </div>
          </details>
        )}
      </div>
    </div>
  );

  if (isGlobal) {
    return (
      <html lang="en">
        <body className="antialiased overflow-hidden">
          {content}
        </body>
      </html>
    );
  }

  return content;
}
