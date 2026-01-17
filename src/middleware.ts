import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    '/((?!_next|api/chat|api/v1/chat|api/v1/images|api/v1/audio|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api(?!/chat|/v1/chat|/v1/images|/v1/audio)|trpc)(.*)',
  ],
}
